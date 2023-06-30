import User from "./model";
import { Sequelize } from "sequelize-typescript";

export const initMySQL = async () => {
  const sequelize = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    database: "leaderboard",
    username: "user",
    password: "123",
  });

  try {
    await sequelize.authenticate();

    sequelize.addModels([User]);

    await sequelize.sync();
    console.log("Connected to the database successfully.");

    return sequelize;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw error;
  }
};
