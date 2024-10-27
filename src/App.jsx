import "./App.css";
import AppName from "./components/AppName";
import NumberInput from "./components/NumberInput";
import Message from "./components/Message";
import GamepadButton from "./components/GamepadButton";
import { useState } from "react";
import Details from "./components/Details";

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random : ", randomNumber);

function App() {
  const [userGuess, setUserGuess] = useState("");
  const [msgClass, setMsgClass] = useState("");
  const [attemptCount, setAttemptCount] = useState(5);
  const [buttonStatus, setButtonStatus] = useState(false);

  const handleRestartGame = () => {
    setUserGuess("");
    setMsgClass("");
    setAttemptCount(0);
    setButtonStatus(false);
    randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a new random number
    window.location.reload();
    console.log("New Random : ", randomNumber); // Log the new random number for debugging
  };

  const handleChangeEvent = (event) => {
    setUserGuess(event.target.value);
  };

  const handleClickEvent = () => {
    let number = parseInt(userGuess, 10);

    // Check for invalid numbers
    if (number < 1 || number > 100 || isNaN(number)) {
      alert("Invalid Number. Please enter a number between 1 and 100.");
      return; // Exit if the number is invalid
    }

    setAttemptCount((prevCount) => prevCount - 1); // Increment attempt count

    // Check if attempts exceeded
    if (attemptCount <= 0) {
      setMsgClass("over");
      setButtonStatus(true);
      setAttemptCount(0);
      return; // Exit if attempts exceeded
    }

    // Compare the user's guess with the random number
    if (number === randomNumber) {
      setMsgClass("success");
      setButtonStatus(true);
    } else if (number > randomNumber) {
      setMsgClass("secondary");
    } else if (number < randomNumber) {
      setMsgClass("primary");
    }
  };

  return (
    <>
      <div className="container p-3">
        {/* Uncomment the next line for debugging purposes */}
        {/* <p>{randomNumber}</p> */}
        <AppName />
        <NumberInput
          handleChangeEvent={handleChangeEvent}
          buttonStatus={buttonStatus}
        />
        <GamepadButton
          handleClickEvent={handleClickEvent}
          buttonStatus={buttonStatus}
          handleRestartGame={handleRestartGame}
        />
        <Message
          messageClass={msgClass}
          handleRestartGame={handleRestartGame}
        />
        <Details attemptCount={attemptCount} />
      </div>
    </>
  );
}

export default App;
