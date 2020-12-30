import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography, Container.
} from '@material-ui/core';
// import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 20
    }
}));

export default function SimpleContainer({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Typography component="div" />
                {children}
            </Container>
        </div>
    );
}