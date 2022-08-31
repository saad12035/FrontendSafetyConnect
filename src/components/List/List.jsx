import React from 'react';
import {ListItemButton, ListItemIcon, ListItemText,List} from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';

function MList(props) {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <>
        <List component="nav">
            {
                props.list.map((items,value)=>{
                    return(
                        <ListItemButton
                            selected={selectedIndex === value}
                            onClick={(event) => handleListItemClick(event, value)}
                        >
                            <ListItemIcon>
                                {items.icon}
                            </ListItemIcon>
                            <ListItemText primary={items.title} />
                        </ListItemButton>
                    );
                })
            }
        </List>
        </>
    );
}

export default MList;