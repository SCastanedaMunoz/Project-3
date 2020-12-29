import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
}));

export default function ContractView(props) {

    const classes = useStyles();

    return (

        <Paper className={classes.paper}>
            <Typography component="h1" variant="h5" align="center">
                COMPANY AGREEMENT OF {props.companyName}
            </Typography>

            <Typography component="h1" variant="body1" align="justify">
                This Company Agreement (this “Agreement”), dated effective {props.effectiveDate}, is executed and agreed to, for good and valuable consideration,by the initial Member listed on Exhibit A.
            </Typography>

        </Paper>
    )
}