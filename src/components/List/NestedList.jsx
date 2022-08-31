//Core imports
import React, {useState} from 'react';
import {Collapse, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

//Local imports
import {ExpandLessIcon, ExpandMoreIcon} from "../../utils/icons";
import {NestedListContainer} from "./List.styles";


function NestedList(props) {
    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <NestedListContainer
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
        </NestedListContainer>
    );
}

export default NestedList;