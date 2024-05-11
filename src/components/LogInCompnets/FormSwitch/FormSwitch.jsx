import "./FormSwitch.css";

export default function FormSwitch({
  isRegistering,
  lable1,
  lable2,
  action1,
  action2,
}) {
  return (
    <div className="form-switch-container">
      {!isRegistering && (
        <button onClick={action1} className="form-switch-guest-button">
          {lable1}
        </button>
      )}
      <button onClick={action2} className="form-switch-action-button">
        {lable2}
      </button>
    </div>
  );
}
