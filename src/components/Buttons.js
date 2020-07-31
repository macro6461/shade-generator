import React, { useState } from "react";
import { Button } from "antd";
import "./../App.css";

const Buttons = ({ colors }) => {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const updateSelectedButtons = color => {
    var arr = selectedButtons;
    if (selectedButtons.indexOf(color) > -1) {
      arr.splice(selectedButtons.indexOf(color));
    } else {
      arr.push(color);
    }
    setSelectedButtons(arr);
  };

  return (
    <div style={{ marginTop: 15 }}>
      {colors.map(color => {
        return (
          <Button
            key={color}
            className="button"
            style={{ backgroundColor: color, color: "white" }}
            onClick={() => {
              updateSelectedButtons(color);
            }}
          >
            {color}
          </Button>
        );
      })}
    </div>
  );
};

export default Buttons;