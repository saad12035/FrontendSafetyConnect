import React, {useState} from 'react';
import {ListItemButton, ListItemIcon, ListItemText, List} from "@mui/material";



function MList(props) {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <>
            {
                props.list.map((items,value)=>{
                    return(
                        <List key={value} component="nav">
                        <ListItemButton
                            selected={selectedIndex === value}
                            onClick={(event) => handleListItemClick(event, value)}
                        >
                            <ListItemIcon sx={{ color:"grey.500"}}>
                                {items.icon}
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{fontSize: '1rem',color:"grey.500"}} primary={items.title} />
                        </ListItemButton>
                        </List>
                    );
                })
            }
        </>
    );
}

export default MList;