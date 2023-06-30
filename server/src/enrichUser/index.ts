import axios from "axios";
import {
  IGuessGenderResponse,
  IRandomUserResponse,
  IuserInput,
} from "./interface";

export enum Gender {
  MALE = "male",
  FEMALE = "female",
  UNDETERMINED = "undetermined",
}

const guessGender = async (name: string): Promise<Gender> => {
  if (!name) {
    return Gender.UNDETERMINED;
  }

  try {
    const response = await axios.get<IGuessGenderResponse>(
      `https://api.genderize.io?name=${name}`
    );
    if (response.data.probability > 0.95) {
      return response.data.gender;
    } else return Gender.UNDETERMINED;
  } catch (e) {
    return Gender.UNDETERMINED;
  }
};

const enrichUserData = async (
  gender: Gender,
  name: string
): Promise<IuserInput> => {
  let enrichUrl = "https://randomuser.me/api/";
  if (gender !== Gender.UNDETERMINED) {
    enrichUrl += `?gender=${gender}`;
  }
  try {
    const enrichedDataResponse = await axios.get<IRandomUserResponse>(
      enrichUrl
    );

    const enrichedData = enrichedDataResponse.data.results[0];

    return {
      name: name,
      gender: gender,
      address:
        enrichedData.location.street.name +
        enrichedData.location.street.number +
        enrichedData.location.city +
        enrichedData.location.country,
      email: enrichedData.email,
      dob: enrichedData.dob.date,
      age: enrichedData.dob.age,
      phone: enrichedData.phone,
      score: 0,
    };
  } catch (e: any) {
    throw new Error("Error enriching User Data:" + e.message);
  }
};

export { guessGender, enrichUserData };
