import { useState } from "react";
import LineBrake from "../../components/LogInCompnets/LineBrake/LineBrake.jsx";
import OtherLogin from "../../components/LogInCompnets/OtherLogIns/OtherLogIn.jsx";
import Input_Register from "../../components/LogInCompnets/Inputs/Input_Register.jsx";
import FormSwitch from "../../components/LogInCompnets/FormSwitch/FormSwitch.jsx";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";
import PlanSelect from "../../components/LogInCompnets/PlanSelect/PlanSelect.jsx";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [planSelect, setPlanSelect] = useState(false);

  const switchForm = () => {
    navigate("/login");
  };

  const toMainpage = () => {
    navigate("/");
  };

  const selectedPlan = () => {
    setPlanSelect(true);
  };

  return (
    <div id="input-box-register">
      <h1 id="title">EventCast</h1>
      {!planSelect ? (
        <>
          <Input_Register joinAsGuest={toMainpage} planSelect={selectedPlan} />
          <LineBrake text="Or Register using:" />
          <OtherLogin />
          <LineBrake text="Already have an account?" />
          <FormSwitch
            isRegistering={true}
            lable2="Log In"
            action2={switchForm}
          />
        </>
      ) : (
        <PlanSelect />
      )}
    </div>
  );
}
