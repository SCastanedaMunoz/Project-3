import React from 'react';
import "./orderedlist.css"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ClauseListItem from "./ClauseListItem"

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
        minHeight: 400,
        maxHeight: 400,
        overflow: "auto"
    }
}));

export default function CompanyAgreementView({
    contractHead,
    article1,
    article2,
    article3,
    article4,
    article5,
    article6,
    article7,
    article8,
    article9,
    article10,
    article11
}) {

    const classes = useStyles();

    return (

        <Paper className={classes.paper} elevation={3}>

            <Typography component="h1" variant="h5" align="center">
                {contractHead.heading}
            </Typography>

            <Typography component="p" variant="body1" align="justify">
                {contractHead.intro}
            </Typography>


            <ol>
                <ClauseListItem article={article1}></ClauseListItem>
                <ClauseListItem article={article2}></ClauseListItem>
                <ClauseListItem article={article3}></ClauseListItem>
                <ClauseListItem article={article4}></ClauseListItem>
                <ClauseListItem article={article5}></ClauseListItem>
                <ClauseListItem article={article6}></ClauseListItem>
                <ClauseListItem article={article7}></ClauseListItem>
                <ClauseListItem article={article8}></ClauseListItem>
                <ClauseListItem article={article9}></ClauseListItem>
                <ClauseListItem article={article10}></ClauseListItem>
                <ClauseListItem article={article11}></ClauseListItem>
            </ol>

        </Paper >
    )
}