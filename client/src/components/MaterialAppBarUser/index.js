import React from 'react';
import userAPI from "../../utils/userAPI"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const AppBarU = AppBar

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function MaterialAppBarU () {
    const classes = useStyles();
  
    function logoutEvent(event) {
        event.preventDefault();
            userAPI.logoutUser().then(() => {
              window.location.replace("/");
            })
                .catch(err => console.log(err));
      };
  
    
    return (
        <div className={classes.root}>
            <AppBarU position="absolute">
                <div>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Formulater
                        </Typography>
                    <Button color="inherit" onClick={logoutEvent}>Logout</Button>
                </Toolbar>
                </div>
                </AppBarU>
        </div>
    )
}
