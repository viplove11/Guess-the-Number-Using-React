import styles from "./GamepadButton.module.css";

const GamepadButton = ({ handleClickEvent, buttonStatus, handleRestartGame }) => {
  if (buttonStatus) {
    return (
      <>
        <button
          className={`${styles.GameButton} btn btn-primary`}
          onClick={handleRestartGame}
        >
          Start Again
        </button>
      </>
    );
  } else {
    return (
      <button
        className={`${styles.GameButton} btn btn-success`}
        onClick={handleClickEvent}
      >
        Check Number
      </button>
    );
  }
};

export default GamepadButton;
