import React, { useState } from "react";
import Buttons from "./components/Buttons";
import RGBInput from "./components/RGBInput";
import SubmitButton from "./components/SubmitButton"
import { Input, Button, Tooltip, Radio } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./App.css";

export default function App() {
  const [color, setColor] = useState(null);
  const [colors, setColors] = useState([]);
  const [type, setType] = useState(1);
  const [rgb, setRgb] = useState(null);

  const genColor = e => {
    var myColor 

    if (type === 1){
      myColor = e.target.value.replace(/#/g, "");
    } else {
      myColor = e.target.value.replace(/\W|_|[0-9]/g, "")
    }
    
    setColor(myColor);
  };

  const addColor = (rgbColor) => {
    var arr = colors;
    var myColor = color

    if (type === 1){
      myColor = "#" + color;
    } else if (type === 2){
      myColor = rgbColor
    } else {
      myColor = myColor.toLowerCase()
    }

    if (!isColor(myColor)) {
      alert("Invalid color. Please check your spelling.")
      setColors(arr);
    } else if (arr.indexOf(myColor) === -1){
      arr.push(myColor);
      setColors(arr)
      if (rgbColor){
        setRgb(rgbColor)
      }
    }
    setColor(null);
  };

  const isColor = (x) => {
    var s = new Option().style;
    s.color = x
    return s.color.length > 1;
  };

  const changeType = (x)=> {
    setType(x.target.value)
    setColor(null);
  }

  console.log(rgb)

  return (
    <div className="App">
      <h1>Shade Generator</h1>
      <div>
      <Radio.Group onChange={changeType} value={type}>
        <Radio value={1}>HEX</Radio>
        <Radio value={2}>RGB</Radio>
        <Radio value={3}>Text</Radio>
      </Radio.Group>
      </div>
      <div>
     {type === 2
      ? <RGBInput color={color} addColor={addColor}/>
      : <Input
      prefix={type === 1 ? "#" : null} 
      onChange={genColor}
      placeholder={type === 1 ? "Enter Hex Code" : 'Enter Color'}
      value={color}
      style={{ width: 200 }}
    />
    }
      {type !== 2 
       ? <SubmitButton enabled={color} onClick={addColor}/>
       : null
      }
      </div>
      <Buttons colors={colors} />
    </div>
  );
}