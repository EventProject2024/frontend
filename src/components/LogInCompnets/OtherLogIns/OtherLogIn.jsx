import google_png from "../../../assets/google-logo.png";
import twitter_png from "../../../assets/GitHub_logo.png";
import github_png from "../../../assets/Twitter_logo.png";
import CircularButton from "./CircularButton";
import styles from "./styles.module.css"

export default function OtherLogIn({ company, children }) {
  return (
    <div className={styles.button_group}>
      <CircularButton
        imageSrc={google_png}
        altText="Button 1"
        onClick={() => console.log("Button 1 clicked")}
      />
      <CircularButton
        imageSrc={twitter_png}
        altText="Button 2"
        onClick={() => console.log("Button 1 clicked")}
      />
      <CircularButton
        imageSrc={github_png}
        altText="Button 3"
        onClick={() => console.log("Button 1 clicked")}
      />
    </div>
  );
}
