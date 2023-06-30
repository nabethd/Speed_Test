import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../API/gameApi";
import "./Main.css";

const Main = () => {
  const [userName, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const onClick = async () => {
    try {
      await createUser(userName);
      navigate("/game", { state: { userName: userName } });
    } catch (error: any) {
      console.error("Failed to create user:", error);
      setErrorMessage(error.response.data);
      setUserName("");
    }
  };

  return (
    <div className="main-page">
      <h1 className="heading">Welcome to our speed test</h1>
      <h2 className="sub-heading">Please enter your name:</h2>
      <div className="input-container">
        <input
          className="input-name"
          onChange={onChange}
          value={userName}
          type="text"
          placeholder="Enter your name"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      <h2 className="sub-heading">Whenever you're ready, click Start:</h2>

      <button
        className="start-game-button"
        onClick={onClick}
        disabled={!userName}
      >
        Start
      </button>
    </div>
  );
};

export default Main;
