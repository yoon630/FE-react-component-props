import React, { useState } from "react";
import Button from "../components/Button/Button";

const SelectButtons = () => {
  const [selectedBtn, setBtnActive] = useState(false);

  const btnClicked = (text) => {
    setBtnActive(text);
  };
  return (
    <div className="selectBtns">
      <Button
        style={{
          backgroundColor: selectedBtn === "Primary" ? "pink" : "#2563eb",
        }}
        onClick={() => btnClicked("Primary")}
        text="Primary"
      ></Button>

      <Button
        style={{
          backgroundColor: selectedBtn === "Secondary" ? "pink" : "#2563eb",
        }}
        onClick={() => btnClicked("Secondary")}
        text="Secondary"
      ></Button>
      <Button
        style={{
          backgroundColor: selectedBtn === "Defalut" ? "pink" : "#2563eb",
        }}
        onClick={() => btnClicked("Defalut")}
        text="Defalut"
      ></Button>
    </div>
  );
};

export default SelectButtons;
