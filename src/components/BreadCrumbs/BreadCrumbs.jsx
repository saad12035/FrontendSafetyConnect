import React from 'react';
import {Grid, Typography} from "@mui/material";

const arr = [
    {
        text: "Inspection >", color: "secondary.900"
    },
    {
        text: "In Progress >", color: "secondary.900"
    },
    {
        text: "Inspection#112233 >", color: "secondary.900"
    },
    {
        text: "Electrical Vibrator -EV04 >", color: "success.700"
    },
]

function BreadCrumbs() {
    return (
        <>
            {
                arr.map((item,value) => {
                    return (
                        <Grid key={value} item>
                            <Typography variant="subtitle2" color={item.color}>{item.text}</Typography>
                        </Grid>
                    );
                })
            }
        </>
    );
}

export default BreadCrumbs;