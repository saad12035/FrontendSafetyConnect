//Core imports
import {
    Badge,
    Box,
    Divider,
    Drawer,
    Grid, IconButton,
    InputAdornment,
    List,
    ListItem,
    ListItemButton, ListItemIcon, ListItemText,
    Typography
} from "@mui/material";

//Local imports
import {HBox, SBox, SHeaderAppBar, SHeaderToolbar,HTextField} from "./Layout.style";
import {
    CloseIcon,
    FormatListBulletedIcon,
    NotificationsOutlinedIcon,
    SearchIcon,
    SettingsOutlinedIcon
} from "../utils/icons";
import {useState} from "react";
import { AssignmentIcon} from '../utils/icons';


const AppNavbar = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Grid item>
            <SHeaderAppBar position="static" color="inherit" elevation={0}>
                <SHeaderToolbar disableGutters>
                    <Grid container>
                            <Box component={Grid} item xs={1}
                                 sx={{
                                    display: {xs: 'grid', sm: 'none'},
                                }}
                            >
                                <IconButton
                                    color="secondary"
                                    edge="start"
                                    onClick={handleDrawerOpen}
                                >
                                    <FormatListBulletedIcon/>
                                </IconButton>
                                <Drawer
                                    variant="persistent"
                                    anchor="left"
                                    open={open}
                                >
                                    <IconButton onClick={handleDrawerClose}>
                                        <CloseIcon/>
                                    </IconButton>
                                    <Divider />
                                    <List>
                                        {['All mail', 'Trash', 'Spam'].map((text, ) => (
                                            <ListItem key={text} disablePadding>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <AssignmentIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText primary={text} />
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Drawer>
                            </Box>
                        <Grid item xs={10} sm={3} lg={3}>
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
