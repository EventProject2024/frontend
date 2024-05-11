import FormSwitch from "../FormSwitch/FormSwitch";
import { useNavigate } from "react-router-dom";
import CheckboxWithDescription from "./Checkbox";
import styles from "./styles.module.css";

const lables = {
  lable1: "Provider/Services",
  description1: "description",
  lable2: "Weather Lab",
  description2: "description",
  lable3: "Custemers",
  description3: "description",
};

export default function PlanSelect() {
  const navigate = useNavigate();
  const toMainpage = () => {
    navigate("/");
  };
  return (
    <>
      <div className={styles.plans_container}>
        <h1 className={styles.container_title}>Select a Plan</h1>
        <CheckboxWithDescription
          label={lables.lable1}
          description={lables.description1}
        />
        <CheckboxWithDescription
          label={lables.lable2}
          description={lables.description1}
        />
        <CheckboxWithDescription
          label={lables.lable3}
          description={lables.description1}
        />
      </div>
      <FormSwitch
        lable1={"Skip for now"}
        lable2={"continue"}
        action1={toMainpage}
        action2={toMainpage}
      />
    </>
  );
}
