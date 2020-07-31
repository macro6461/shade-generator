import React, {useState} from 'react';
import {Input} from 'antd';
import SubmitButton from './SubmitButton';
import './../App.css'

const RGBInput = (props) =>{

    const {addColor} = props;

    const [red, setRed] = useState(null)
    const [green, setGreen] = useState(null)
    const [blue, setBlue] = useState(null)

    const funcs = {red: setRed, green: setGreen, blue: setBlue}

    const onChange = (e, key) => {
        var str = e.target.value
        var firstCheck = str.match(/rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/)
        if (firstCheck){
            setRed(firstCheck[1])
            setGreen(firstCheck[2])
            setBlue(firstCheck[3])
        } else {
            if (str.length <=3){
                var myFunc = funcs[key]
                myFunc(str)
            }
        }
    }

    const submitColor = () =>{
        var color = 'rgb(' + red + ', ' + blue + ', ' + green + ')'
        addColor(color)
        setRed(null)
        setBlue(null)
        setGreen(null)
    };

    return (
        <>
            RGB(
                <Input className='rgbInput' value={red} style={{width: 50}} onChange={(e)=>onChange(e, 'red')}/>
                <Input className='rgbInput' value={green} style={{width: 50}} onChange={(e)=>onChange(e, 'green')}/>
                <Input className='rgbInput' value={blue} style={{width: 50, marginRight: 10}} onChange={(e)=>onChange(e, 'blue')}/> )

                <SubmitButton enabled={red && green && blue} onClick={submitColor}/>
        </>
    )

};

export default RGBInput;