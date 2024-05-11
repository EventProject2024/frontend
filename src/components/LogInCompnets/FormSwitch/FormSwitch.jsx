import styles from "./styles.module.css";

export default function FormSwitch({
  isRegistering,
  lable1,
  lable2,
  action1,
  action2,
}) {
  return (
    <div className={styles.form_switch_container}>
      {!isRegistering && (
        <button onClick={action1} className={styles.form_switch_guest_button}>
          {lable1}
        </button>
      )}
      <button onClick={action2} className={styles.form_switch_action_button}>
        {lable2}
      </button>
    </div>
  );
}
