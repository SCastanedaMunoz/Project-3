import React from 'react';
import "./orderedlist.css"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ClauseListItem from "./ClauseListItem"

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

export default function CompanyAgreementView({
    members,
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
    article11,
    certificateRef,
    voteRef,
    taxRef,
    pushPullRef,
    fiduciaryRef
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
                <ClauseListItem article={article2} certificateRef={certificateRef}></ClauseListItem>
                <ClauseListItem article={article3} voteRef={voteRef}></ClauseListItem>
                <ClauseListItem article={article4}></ClauseListItem>
                <ClauseListItem article={article5}></ClauseListItem>
                <ClauseListItem article={article6} taxRef={taxRef}></ClauseListItem>
                <ClauseListItem article={article7}></ClauseListItem>
                <ClauseListItem article={article8} pushPullRef={pushPullRef}></ClauseListItem>
                <ClauseListItem article={article9} fiduciaryRef={fiduciaryRef}></ClauseListItem>
                <ClauseListItem article={article10}></ClauseListItem>
                <ClauseListItem article={article11}></ClauseListItem>
            </ol>

            <Typography component="p" variant="body1" align="justify">
                IN WITNESS WHEREOF, the undersigned Member(s) has/have duly executed this Agreement as of the day and year first above written.
            </Typography>

            <br />

            <Typography component="p" variant="body1" align="justify">
                MEMBERS(S):
            </Typography>

            <br />

            {members.map(member => (
                <Typography component="p" variant="body1" align="justify">
                    ________________________________ <br />
                    {member.name}
                </Typography>
            ))}

        </Paper >
    )
}