import React from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';


const Listas = () => {

    return (
        <div>
            <List component="nav">
                <ListItem button>
                <ListItemIcon>
                    <AudiotrackIcon/>
                </ListItemIcon>
                <ListItemText> primer elemento</ListItemText>
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                    <AccessibilityNewIcon/>
                </ListItemIcon>
                <ListItemText> segundo elemento</ListItemText>
                </ListItem>
            </List>
            <Divider/>
        </div>

    )
}
export default Listas;