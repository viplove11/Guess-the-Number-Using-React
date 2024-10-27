import styles from "./Message.module.css";
const Message = ({ messageClass }) => {
  if (messageClass === "success") {
    return (
      <div
        className={`${styles.message} alert alert-${messageClass}`}
        role="alert"
      >
        Congratulation You Win !!
      </div>
    );
  } else if (messageClass === "primary") {
    return (
      <div
        className={`${styles.message} alert alert-${messageClass}`}
        role="alert"
      >
        You guessed it too "LOW".
      </div>
    );
  } else if (messageClass === "secondary") {
    return (
      <div
        className={`${styles.message} alert alert-${messageClass}`}
        role="alert"
      >
        You guessed it too "High".
      </div>
    );
  }
   else if (messageClass === "over") {
    return (
      <div
        className={`${styles.message} alert alert-warning`}
        role="alert"
      >
        Game Over Dude !!
      </div>
    );
  }
};
export default Message;
