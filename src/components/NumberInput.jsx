import styles from "./NumberInput.module.css";
const NumberInput = ({handleChangeEvent, buttonStatus}) => {
  return (
    <>
      <input
        type="text"
        name=""
        placeholder="Guessed Number"
        id=""
        className={`${styles.inputField} form-control`}
        onChange={handleChangeEvent} required
        disabled={buttonStatus}
      />
    </>
  );
};

export default NumberInput;
