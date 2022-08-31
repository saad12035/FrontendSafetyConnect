import React, {useState} from 'react';
import {Collapse, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {ExpandLessIcon, ExpandMoreIcon} from "../../utils/icons";


function NestedList(props) {
    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
        >
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={props.name} />
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {
                    props.subList.map((item,value)=>{
                        return(
                            <List key={value} component="div" disablePadding>
                                <ListItemButton >
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </List>
                        );
                    })
                }
            </Collapse>
        </List>
    );
}

export default NestedList;