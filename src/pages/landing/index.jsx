//Core imports
import React from 'react';
import {Avatar, Divider, Grid, Paper,  Typography} from "@mui/material";
import {Box} from "@mui/system";

//Local imports
import {HomeGrid, ListGridItems} from "./Layout.styles";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import {GeneratorImage} from "../../assets/images";
import InspectionScore from "../../components/InspectionScore/InspectionScore";
import Button from "../../components/Buttons/Button";
import MList from "../../components/List/List";
import NestedList from "../../components/List/NestedList";
import {itemsDetails, menuItems, projectItems, submissionDetails} from "../../utils/data";



function Landing() {
    function getItemDetailsDesktop() {
        return (
            itemsDetails.map((item,value) => {
                return (
                    <React.Fragment key={value}>
                        {
                            (item.title === "Due Date:") ?
                                <>
                                    <Grid item md={12}>
                                        <Divider style={{width: "100%"}}/>
                                    </Grid>
                                </>
                                :
                                null
                        }
                        <Grid item md={0.2}/>
                        <Grid item>
                            <Typography color="black" variant="body2" fontWeight="bold">
                                {item.title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography color="grey.600" variant="body2">
                                {item.value}
                            </Typography>
                        </Grid>
                    </React.Fragment>
                );
            }));
    }
    function getItemDetailsMobile() {
        return (
            itemsDetails.map((item,value) => {
                return (
                    <React.Fragment key={value}>
                        <Grid item xs={6}>
                            <Typography textAlign="start" color="black" variant="body2" fontWeight="bold">
                                {item.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography textAlign="end" color="grey.600" variant="body2">
                                {item.value}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} mt={1} mb={2}>
                            <Divider/>
                        </Grid>
                    </React.Fragment>
                );
            }));
    }
    function getSubmissionDetailsDesktop() {
        return (
            submissionDetails.map((item,value) => {
                return (
                    <React.Fragment key={value}>
                        {(item.title === "Status: ") ? <><Grid item md={12}><Divider
                            style={{width: "100%"}}/></Grid>  </> : null}
                        <Grid item>
                            <Typography color="black" variant="body2" fontWeight="bold">
                                {item.title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography color="grey.600" variant="subtitle1">
                                {item.inputType}
                            </Typography>
                        </Grid>
                    </React.Fragment>
                );
            }));
    }
    function getSubmissionDeatilsMobile() {
        return (
            submissionDetails.map((details,value) => {
                return (
                    <React.Fragment key={value}>
                        <Grid item xs={6}>
                            <Typography textAlign="start" color="black" variant="body2" fontWeight="bold">
                                {details.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography textAlign="end" color="grey.600" variant="subtitle1">
                                {details.inputType}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} mt={1} mb={2}>
                            <Divider/>
                        </Grid>
                    </React.Fragment>
                );
            })
        );
    }
    return (
        <HomeGrid container>
            <Box component={Grid} mb={5} item display={{xs: "none", lg: "grid"}} lg={2.5}>
                <Paper style={{minHeight: 600}} elevation={3}>
                    <Grid container padding="20px">
                        <Grid item md={2} ml={4} mt={2}>
                            <Avatar alt="Remy Sharp"/>
                        </Grid>
                        <Grid item md={7} ml={3}>
                            <Typography color="primary.custom" variant="h5" fontWeight="600">Welcome ! <br/>John
                                Doe</Typography>
                        </Grid>
                        <Grid item md={12} mt={3}>
                            <Button
                                text="Create New +"
                                backgroundColor="rgb(17, 37, 101)"
                                color="white"
                                fontSize="1.5rem"
                                borderRadius="50"
                                width="100%"
                            />
                        </Grid>
                        <Grid item md={12} mt={3}>
                            <MList list={menuItems}/>
                            <Divider sx={{width: "100%"}}/>
                            <NestedList name="Your Projects" subList={projectItems}/>
                            <Divider sx={{width: "100%"}}/>
                            <NestedList name="Team Members" subList={projectItems}/>
                            <Grid container justifyContent="flex-end" spacing={1}>
                                <Grid item>
                                    <Avatar sx={{bgcolor: "success.700"}}>
                                        <Typography>+3</Typography>
                                    </Avatar>
                                </Grid>
                                <Grid item>
                                    <Avatar sx={{bgcolor: "primary.custom"}}>
                                        <Typography>+</Typography>
                                    </Avatar>
                                </Grid>
                            </Grid>
                            <Divider sx={{width: "100%", marginTop: 2}}/>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
            <Grid item xs={0} lg={0.2}/>
            <Grid item xs={12} lg={9.2}>
                <Grid container mb={5} display={{xs: "none", lg: "grid"}} spacing={{sm: 4}}>
                    <Grid item sm={12}>
                        <Paper style={{minHeight: 100, padding: 20}} elevation={0}>
                            <Typography variant="h4" color="primary.custom"> Audit and Inspection</Typography>
                            <Grid container direction={'row'} spacing={4} sx={{mt: 0.5}}>
                                <BreadCrumbs/>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item sm={12}>
                        <Paper style={{minHeight: 120, padding: 0}} elevation={3}>
                            <Grid container direction={'row'} spacing={2} justifyContent="flex-start">
                                {getItemDetailsDesktop()}
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item sm={12}>
                        <Paper style={{minHeight: 750}} elevation={3}>
                            <Typography pt={5} variant="h5" textAlign="center" fontWeight="bold" color="primary.custom">Electrical
                                Vibrator</Typography>
                            <Typography variant="body2" textAlign="center" fontWeight="500" color="grey.800">Inspection
                                Summary</Typography>
                            <Grid container pt={5}>
                                <ListGridItems item md={4}>
                                    <InspectionScore/>
                                </ListGridItems>
                                <Grid item md={3}/>
                                <Grid item md={4}>
                                    <GeneratorImage/>
                                </Grid>
                            </Grid>
                            <Divider sx={{borderBottomWidth: 5}}/>
                            <Grid container alignItems="center" padding={5} spacing={6}>
                                {getSubmissionDetailsDesktop()}
                            </Grid>
                            <Grid container justifyContent="space-around" paddingBottom={2}>
                                <Grid item>
                                    <Button
                                        fontSize="1.2rem"
                                        minHeight="3rem"
                                        width="12rem"
                                        text="Print"
                                        backgroundColor="rgb(75, 167, 53)"
                                        color="white"
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container width="100%" mb={5} display={{xs: "grid", lg: "none"}}>
                    <Paper style={{minHeight: 100}} elevation={3}>
                        <Grid item xs={12}>
                            <Typography variant="h5" textAlign="center" fontWeight="500" color="primary.custom">Electrical
                                Vibrator</Typography>
                            <Typography variant="body2" textAlign="center" fontWeight="500" color="grey.500">Audit
                                Summary</Typography>
                            <Grid container padding={2}>
                                {getItemDetailsMobile()}
                            </Grid>
                            <Grid container justifyContent="center" padding={2}>
                                <GeneratorImage/>
                            </Grid>
                            <InspectionScore/>
                            <Grid container alignItems="center" padding={2}>
                                {getSubmissionDeatilsMobile()}
                            </Grid>
                            <Grid container justifyContent="space-around" paddingBottom={2}>
                                <Grid item>
                                    <Button
                                        fontSize="1.2rem"
                                        minHeight="3rem"
                                        width="20rem"
                                        text="Print"
                                        backgroundColor="rgb(75, 167, 53)"
                                        color="white"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </HomeGrid>
    );
}

export default Landing;