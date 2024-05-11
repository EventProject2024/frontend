import LineBrake from "../../components/LogInCompnets/LineBrake/LineBrake.jsx";
import OtherLogin from "../../components/LogInCompnets/OtherLogIns/OtherLogIn.jsx";
import "./LogInPage.css";
import Input_LogIn from "../../components/LogInCompnets/Inputs/Input_LogIn.jsx";
import FormSwitch from "../../components/LogInCompnets/FormSwitch/FormSwitch.jsx";
import { useNavigate } from "react-router-dom";

export default function LogInPage() {
  const navigate = useNavigate(); 

  const switchForm = () => {
    navigate("/register");
  };
  const toMainpage = () => {
    navigate("/"); 
  };

  return (
    <div id="input-box">
      <h1 id="title">EventCast</h1>
      <Input_LogIn />
      <LineBrake text="Or Sign up using:" />
      <OtherLogin />
      <LineBrake text="Don't have an account?" />
      <FormSwitch
        isRegistering={false}
        lable1="Join as Guest"
        lable2="Register"
        action1={toMainpage}
        action2={switchForm} 
      />
    </div>
  );
}
