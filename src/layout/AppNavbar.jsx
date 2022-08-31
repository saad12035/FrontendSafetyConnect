import {Badge, Box, Grid, InputAdornment,Typography} from "@mui/material";
import {HBox, SBox, SHeaderAppBar, SHeaderToolbar,HTextField} from "./Layout.style";
import {NotificationsOutlinedIcon, SearchIcon, SettingsOutlinedIcon} from "../utils/icons";




const AppNavbar = () => {
    return (
        <Grid item>
            <SHeaderAppBar position="static" color="inherit" elevation={0}>
                <SHeaderToolbar disableGutters>
                    <Grid container>
                        <Grid item xs={12} sm={3} lg={3}>
                            <HBox flexWrap="wrap">
                                <Typography fontWeight="400" variant="h5" color="secondary">Safety Connect</Typography>
                            </HBox>
                        </Grid>
                        <Grid item xs={0} sm={8} lg={8}>
                            <SBox display="flex">
                                <Box
                                    sx={{
                                        display: {xs: 'none', sm: 'flex'},
                                        alignItems:"center",
                                    }}
                                >
                                    <HTextField
                                        id="header-search"
                                        label="Search"
                                        size="small"
                                        color="secondary"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <SearchIcon color="secondary"/>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <SettingsOutlinedIcon fontSize="medium" color="secondary" sx={{mr:3}}/>
                                    <Badge badgeContent={2} color="error">
                                        <NotificationsOutlinedIcon fontSize="medium" color="secondary"/>
                                    </Badge>
                                </Box>
                            </SBox>
                        </Grid>
                    </Grid>
                </SHeaderToolbar>
            </SHeaderAppBar>
        </Grid>
    );
};

export default AppNavbar;
