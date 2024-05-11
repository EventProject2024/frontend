import "./LineBrake.css";

export default function LineBrake({ text }) {
  return (
    <div className="line-with-text">
      <hr className="line" />
      <h3 className="heading">{text}</h3>
      <hr className="line" />
    </div>
  );
}
