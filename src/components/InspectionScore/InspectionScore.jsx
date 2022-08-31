import React from 'react';
import {Grid, List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import {CCheckbox, IListContainer, ITitleContainer} from "./InspectionScore.styles";
import {RadioButtonCheckedIcon, RadioButtonUncheckedIcon} from "../../utils/icons";


const inspectionDetails=[
    {
        primaryText:"Physical condition of body is good & sound. ",
        secondaryText:"Dust and Dirt shall be removed.",
        status:"Yes",
        color:"green",
    },
    {
        primaryText:"Physical condition of body is good & sound. ",
        secondaryText:"Dust and Dirt shall be removed.",
        status:"Yes",
        color:"green",
    },
    {
        primaryText:"Physical condition of body is good & sound. ",
        secondaryText:"Dust and Dirt shall be removed.",
        status:"Yes",
        color:"green",
    },
    {
        primaryText:"Physical condition of body is good & sound. ",
        secondaryText:"Dust and Dirt shall be removed.",
        status:"Yes",
        color:"green",
    },
    {
        primaryText:"Physical condition of body is good & sound. ",
        secondaryText:"Dust and Dirt shall be removed.",
        status:"Yes",
        color:"green",
    },
    {
        primaryText:"Physical condition of body is good & sound. ",
        secondaryText:"Dust and Dirt shall be removed.",
        status:"Yes",
        color:"green",
    },
    {
        primaryText:"Physical condition of body is good & sound. ",
        secondaryText:"Dust and Dirt shall be removed.",
        status:"No",
        color:"red",
    },

]

function InspectionScore() {
    return (
        <Grid container>
            <ITitleContainer container>
                <Grid item>
                    <Typography variant="body1" fontWeight="600">Inspection Score:</Typography>
                </Grid>
            </ITitleContainer>
            <IListContainer container>
                <Grid item md={12}>
                    <List style={{maxHeight:400,overflowY:"scroll"}}>
                        {
                            inspectionDetails.map((item,value)=>{
                                return(
                                    <ListItem
                                        secondaryAction={
                                            <CCheckbox
                                                icon={<RadioButtonUncheckedIcon />}
                                                checkedIcon={<RadioButtonCheckedIcon />}
                                                style={{color:item.color}}
                                                edge="end"
                                                checked={true}
                                                disabled={true}
                                            />
                                        }
                                        disablePadding
                                    >
                                        <ListItemButton >
                                            <ListItemText
                                                style={{marginRight:20}}
                                                primary={(value+1)+". "+item.primaryText}
                                                secondary={item.secondaryText}
                                            />
                                            <Typography color={item.color}>{item.status}</Typography>
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })
                        }
                    </List>
                </Grid>
            </IListContainer>
        </Grid>
    );
}

export default InspectionScore;