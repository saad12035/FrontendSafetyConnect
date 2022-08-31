import React from 'react';
import AppNavbar from "./AppNavbar";
import {Container, CssBaseline, Grid} from "@mui/material";
import { Outlet } from "react-router-dom";
function AppLayout() {
    return (
        <>
            <AppNavbar />
            <CssBaseline />
            <Container
                maxWidth="xl"
                sx={() => ({ backgroundColor: "rgb(237, 242, 246)"})}
            >
                <Grid container display="flex" direction="column" minHeight="90vh">
                    <Grid
                        item
                        sx={{ paddingTop: "20px"}}
                    >
                        <Outlet />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default AppLayout;