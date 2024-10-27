import Attempt from "./Attempt";
import styles from "./Details.module.css";
const Details = ({userAllGuess, attemptCount}) => {
  return (
    <div className={`${styles.details}`}>
      <Attempt attemptCount={attemptCount} />
    </div>
  );
};

export default Details;
