import React, { useState } from 'react';
import userAPI from "../../utils/userAPI"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

export default function MaterialAppBar() {
    const classes = useStyles();
    const history = useHistory();
    const redirectHome = () => {
        history.push("/")
    }

    const [loggedIn, setStatus] = useState(false)

    function logoutEvent(event) {
        event.preventDefault();
        userAPI.logoutUser().then(() => {
            window.location.replace("/");
        })
            .catch(err => console.log(err));
    };

    userAPI.getCurrentUser().then((result) => {
        if (result.data){
            setStatus(true)
        }
        else{
            setStatus(false)
        }
    })

    return (
        <div className={classes.root}>
            <AppBar position="absolute">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Formulater
                        </Typography>
                        {loggedIn ? (
                            <Button color="inherit" onClick={logoutEvent}>Logout</Button>
                        ) : (
                            <Button color="inherit" onClick={redirectHome}>Login</Button>
                        )}
                </Toolbar>
            </AppBar>
        </div>
    )
}
