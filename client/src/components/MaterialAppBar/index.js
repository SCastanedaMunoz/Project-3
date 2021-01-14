import React from 'react';

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

    return (
        <div className={classes.root}>
                <AppBar position="absolute">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Formulater
                        </Typography>
                    <Button color="inherit" onClick= {redirectHome}>Login</Button>
                    </Toolbar>
                </AppBar>
        </div>
    )
}
