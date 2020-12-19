import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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