import React from 'react';
import {Button} from "@mui/material";

function Buttons(props) {
    return (
        <Button
            onClick={props.onClick}
            startIcon={props.startIcon}
            style={{
                color: props.color,
                fontWeight: props.fontWeight,
                width:props.width,
                border:props.border,
                backgroundColor: props.backgroundColor,
                borderRadius: props.borderRadius,
                minHeight:props.minHeight,
                fontSize:props.fontSize
            }}
        >
            {props.text}
        </Button>
    );
}

export default Buttons;