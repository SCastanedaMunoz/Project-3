import React, { useState } from 'react';
import userAPI from "../../utils/userAPI"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import FaceIcon from '@material-ui/icons/Face';
import GavelIcon from '@material-ui/icons/Gavel';
import SettingsIcon from '@material-ui/icons/Settings';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const AppBarU = AppBar

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 'auto',
    },
    button: {
        display: "flex",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    Drawer: {
        height: "100%", width: "250px", backgroundColor: "rgb(153, 153, 153)", color: "white", textShadow: "1px 2px 2px black",
    }
}));


export default function MaterialAppBarU() {
    const [open, setOpen] = useState(false)

    const handleDrawer = () => {
        setOpen(true)
    }

    const classes = useStyles();

    function logoutEvent(event) {
        event.preventDefault();
        userAPI.logoutUser().then(() => {
            window.location.replace("/");
        })
            .catch(err => console.log(err));
    };

    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
        <div className={classes.root}>
            <AppBarU position="absolute">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                         Formulater
                        </Typography>
                    <Button color="inherit" onClick={logoutEvent}>Logout</Button>
                </Toolbar>
            </AppBarU>
            <Drawer
                anchor='left'
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className={classes.Drawer}>
                <MenuList>
          <MenuItem>  
            <GavelIcon  color="secondary" style={{textShadow: "1px 2px 2px black", marginRight: "5px",}}/>
           Saved Documents
           </MenuItem>
            <MenuItem>
            <FaceIcon color="secondary" style={{ textShadow: "1px 2px 2px black", marginRight: "5px", }} />
            Profile
            </MenuItem>
             <MenuItem style={{ marginTop: "830px",}}>
            <SettingsIcon color="secondary" style={{ textShadow: "1px 2px 2px black", marginRight: "5px",  }} />
             Account Settings
            </MenuItem>
        </MenuList>
                </div>

            </Drawer>
        </div>
    )
}
