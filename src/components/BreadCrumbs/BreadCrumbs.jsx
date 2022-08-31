//Core imports
import React from 'react';
import {Grid, Typography} from "@mui/material";

//Local imports
import {breadcrumbs} from "../../utils/data";

function BreadCrumbs() {
    return (
        <>
            {
                breadcrumbs.map((item,value) => {
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