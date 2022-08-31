import React from 'react';
import {Avatar, Divider, Grid,MenuItem, Paper, Select, Typography} from "@mui/material";
import {HomeGrid, ListGridItems} from "./Layout.styles";
import {Box} from "@mui/system";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import {GeneratorImage} from "../../assets/images";
import InspectionScore from "../../components/InspectionScore/InspectionScore";
import Button from "../../components/Buttons/Button";
import MList from "../../components/List/List";
import HomeIcon from '@mui/icons-material/Home';

const itemsDetails = [
    {
        title: "Inspection Id :",
        value: "112233"
    },
    {
        title: "Identification Number:",
        value: "EV-01"
    },
    {
        title: "Project:",
        value: "Truck Loading Silo"
    },
    {
        title: "Location:",
        value: "Silo-2 "
    },
    {
        title: "Due Date:",
        value: "Mar 8, 2021 10:30 am"
    },
    {
        title: "Inspection Date:",
        value: "Mar 8, 2021 10:30 am"
    },
]
const submissionDetails = [
    {
        title: "Inspection By: ",
        inputType: <Typography>Saad Ali Ahsan</Typography>,
    },
    {
        title: "Submitted To: ",
        inputType:
            <Select
                id="submitted-to"
                label="Age"
                size="small"
                color="primary"
                defaultValue={10}
                disabled={true}
            >
                <MenuItem value={10}>Mubasshir</MenuItem>
            </Select>,
    },
    {
        title: "Status: ",
        inputType: <Typography>Pending Approval</Typography>,
    },
]
const menuItems = [
    {
        title: "Home ",
        icon: <HomeIcon/>,
    },
    {
        title: "Home ",
        icon: <HomeIcon/>,
    },
]
function Landing() {

    function getItemDetailsDesktop() {
        return (
            itemsDetails.map((item, value) => {
                return (
                    <>
                        {(item.title === "Due Date:") ? <><Grid item md={12}><Divider
                            style={{width: "100%"}}/></Grid>  </> : null}
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
                    </>
                );
            }));
    }
    function getItemDetailsMobile() {
        return (
            itemsDetails.map((item) => {
                return (
                    <>
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
                    </>
                );
            }));
    }

    function getSubmissionDetailsDesktop() {
        return (
            submissionDetails.map((item, value) => {
                return (
                    <>
                        {(item.title === "Status: ") ? <><Grid item md={12}><Divider
                            style={{width: "100%"}}/></Grid>  </> : null}
                        <Grid item>
                            <Typography color="black" variant="body2" fontWeight="bold">
                                {item.title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography color="grey.600" variant="body2">
                                {item.inputType}
                            </Typography>
                        </Grid>
                    </>
                );
            }));
    }
    function getSubmissionDeatilsMobile() {
        return (
                submissionDetails.map((details) => {
                    return (
                        <>
                            <Grid item xs={6}>
                                <Typography textAlign="start" color="black" variant="body2" fontWeight="bold">
                                    {details.title}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography textAlign="end" color="grey.600" variant="body2">
                                    {details.inputType}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} mt={1} mb={2}>
                                <Divider/>
                            </Grid>
                        </>
                    );
                })
        );
    }

    return (
        <HomeGrid container>
            <Box component={Grid} item display={{xs: "none", lg: "grid"}} lg={2}>
                <Paper style={{minHeight: 900}} elevation={3}>
                    <Grid container padding="20px" >
                        <Grid item md={2} mt={2} >
                            <Avatar alt="Remy Sharp" />
                        </Grid>
                        <Grid item md={7} ml={3}>
                            <Typography color="primary.custom" variant="h5" fontWeight="600">Welcome ! <br/>John Doe</Typography>
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
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
            <Grid item xs={0} lg={0.2}/>
            <Grid item xs={12} lg={9.8}>
                <Grid container display={{xs: "none", lg: "grid"}} spacing={{sm: 4}}>
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
                <Grid container width="100%" display={{xs: "grid", lg: "none"}}>
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