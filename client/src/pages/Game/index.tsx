import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Indicator from "../../Components/Indicator";
import "./Game.css";
import { addUserScore } from "../../API/gameApi";

const Game = () => {
  const [indicatorPosition, setIndicatorPosition] = useState<
    "left" | "right" | null
  >(null);
  const [gameState, setGameState] = useState<"waiting" | "showing">("waiting");
  const [timer, setTimer] = useState<number>(0);
  const [resetGame, setResetGame] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<
    "Too Soon" | "Wrong Key" | "Too Late" | "Success" | ""
  >(""); // the 'Success' text is not indicated in the task but i figured we need to add it

  const { state } = useLocation();
  const { userName } = state;
  useEffect(() => {
    if (gameState === "waiting" || resetGame) {
      const randomTime = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);
      setTimer(randomTime);
      setResetGame(false);
    }
  }, [gameState, resetGame]);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (gameState === "waiting" && timer > 0) {
      timerId = setTimeout(() => {
        setGameState("showing");
        setFeedback("");
        setIndicatorPosition(Math.random() < 0.5 ? "left" : "right");
      }, timer);
    } else if (gameState === "showing") {
      timerId = setTimeout(() => {
        if (!feedback) {
          setFeedback("Too Late");
        }
        setGameState("waiting");
        setIndicatorPosition(null);
      }, 1000);
    }

    return () => clearTimeout(timerId);
  }, [gameState, timer]);

  useEffect(() => {
    const handleKeyPress = async (event: KeyboardEvent) => {
      const keyPressed = event.key.toLowerCase();
      const expectedKey = indicatorPosition === "left" ? "a" : "l";
      if (gameState === "waiting") {
        setFeedback("Too Soon");
        setResetGame(true); // this enables us to restart the timer after every "Too Soon" click
      } else if (gameState === "showing") {
        if (keyPressed === expectedKey) {
          setFeedback("Success");
          try {
            await addUserScore(userName, 1);
          } catch (e) {
            console.log("failed to add Score");
          }
        } else {
          setFeedback("Wrong Key");
        }
      }
      setGameState("waiting");
      setIndicatorPosition(null);
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [gameState]);

  return (
    <div className="game-page">
      <div className="game-area">
        <Indicator
          isVisible={indicatorPosition === "left"}
          showingSide="left"
        />

        <div className="separator" />

        <Indicator
          isVisible={indicatorPosition === "right"}
          showingSide="right"
        />
      </div>
      <div
        className="feedback"
        style={{ color: feedback === "Success" ? "green" : "red" }}
      >
        {gameState === "waiting" && feedback}
      </div>
    </div>
  );
};

export default Game;
