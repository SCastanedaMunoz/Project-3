import React from 'react';
import "./orderedlist.css"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

    paper: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
        minHeight: 500,
        maxHeight: 500,
        overflow: "auto"
    }
}));

export default function CompanyAgreementView() {

    const classes = useStyles();

    return (

        <Paper className={classes.paper} elevation={3}>

            <Typography component="h1" variant="h5" align="center">
                COMPANY AGREEMENT
            </Typography>

        </Paper >
    )
}