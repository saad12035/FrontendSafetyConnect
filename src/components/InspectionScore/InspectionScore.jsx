//Core imports
import React from 'react';
import {Grid, List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";

//Local imports
import {CCheckbox, IListContainer, InspectionScoreSlider, ITitleContainer} from "./InspectionScore.styles";
import {RadioButtonCheckedIcon, RadioButtonUncheckedIcon} from "../../utils/icons";
import {inspectionDetails} from "../../utils/data";




function InspectionScore() {
    return (
        <Grid container>
            <ITitleContainer container>
                <Grid item xs={6} md={6}>
                    <Typography variant="body1" fontWeight="600">Inspection Score:</Typography>
                </Grid>
                <Grid item xs={6} md={6}>

                </Grid>
            </ITitleContainer>
            <IListContainer container>
                <Grid item md={12}>
                    <List>
                        {
                            inspectionDetails.map((item, value) => {
                                return (
                                    <ListItem
                                        key={value}
                                        secondaryAction={
                                            <CCheckbox
                                                icon={<RadioButtonUncheckedIcon/>}
                                                checkedIcon={<RadioButtonCheckedIcon/>}
                                                style={{color: item.color}}
                                                edge="end"
                                                checked={true}
                                                disabled={true}
                                            />
                                        }
                                        disablePadding
                                    >
                                        <ListItemButton>
                                            <ListItemText
                                                style={{marginRight: 20}}
                                                primary={(value + 1) + ". " + item.primaryText}
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