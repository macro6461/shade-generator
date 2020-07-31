import React from 'react';
import { Button, Tooltip } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

 const SubmitButton = ({onClick, enabled}) =>{
     return (
         <Tooltip title={enabled ? 'enter color' : 'add color'}>
             <Button
                style={{ marginLeft: 10 }}
                type="primary"
                disabled={!enabled}
                onClick={onClick}
                >
                <PlusCircleOutlined />
            </Button>
         </Tooltip>
     )
 }

 export default SubmitButton;