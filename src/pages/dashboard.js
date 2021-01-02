import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialAppBar from "../components/MaterialAppBar";
import SimpleContainer from "../components/MaterialContainer"
import MaterialGrid from "../components/MaterialGrid";
import Grid from '@material-ui/core/Grid';
import MaterialPaper from "../components/MaterialPaper";

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
    }
}));

function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <MaterialAppBar />
            <SimpleContainer>
                <MaterialGrid>
                    <Grid item xs={6}>
                        <MaterialPaper>Test</MaterialPaper>
                    </Grid>
                    <Grid item xs={6}>
                        <MaterialPaper>Test</MaterialPaper>
                    </Grid>
                </MaterialGrid>
            </SimpleContainer>
        </div >
    );
}

export default Dashboard;