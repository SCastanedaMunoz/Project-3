import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignContent: "center"
    }
}));

export default function MaterialGrid({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                {children}
            </Grid>
        </div >
    );
}