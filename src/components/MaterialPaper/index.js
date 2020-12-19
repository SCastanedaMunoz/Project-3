import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        // padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing("50%"),
            height: theme.spacing(100),
        },
    },
    // paper: {
    //     padding: theme.spacing(2),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //     height: 100
    // },
}));

export default function MaterialPaper({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper>{children}</Paper>
        </div >
    );
}