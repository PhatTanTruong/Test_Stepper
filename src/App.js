import React from "react";
import "./App.css";
import "./assets/style.css";
import Stepper from "./component/Stepper";
import Step from "./component/Step";

function App() {
  return (
    <div className="App">
      <Stepper>
        <Step activeKey="step1" title="Step 1" />
        <Step activeKey="step2" title="Step 2" />
        <Step activeKey="step3" title="Step 3" />
        <Step activeKey="step4" title="Step 4" />
        <Step activeKey="step5" title="Step 5" />
        <Step activeKey="step6" title="Step 6" />
      </Stepper>
    </div>
  );
}

export default App;
