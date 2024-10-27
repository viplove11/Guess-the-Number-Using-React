import styles from "./Attempt.module.css";

const Attempt = ({ attemptCount }) => {
  return (
    <div className={`${styles.attempt}`}>
      Your Attempt :{" "}
      <span className={`${styles.attemptSpan}`}>{attemptCount}</span>
    </div>
  );
};
export default Attempt;
