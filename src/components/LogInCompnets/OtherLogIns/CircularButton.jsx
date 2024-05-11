import "./OtherLogIns.css"

export default function CircularButton({ imageSrc, altText, onClick }) {
    return (
      <button className="circular-button" onClick={onClick}>
        <div className="button-content">
          <img src={imageSrc} alt={altText} className="button-image" />
        </div>
      </button>
    );
  }