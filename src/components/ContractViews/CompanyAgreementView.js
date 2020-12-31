import React from 'react';
import "./orderedlist.css"
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
    }
}));

export default function CompanyAgreementView({
    contractHead,
    article1,
    companyName,
    effectiveDate,
    certificateValue,
    style
}) {

    const classes = useStyles();

    return (

        <Paper className={classes.paper}>

            <Typography component="h1" variant="h5" align="center">
                {contractHead.title}
            </Typography>

            <Typography component="p" variant="body1" align="justify">
                {contractHead.text}
            </Typography>

            <Typography component="h1" variant="h6" align="center">
                {article1[0].title}
            </Typography>

            <ol>
                <li>
                    <ol>
                        {article1.slice(1).map((clause) => (
                            <li>
                                {Object.values(clause)}
                            </li>
                        ))}
                    </ol>
                </li>
            </ol>

            <Typography component="h1" variant="h5" align="center">
            </Typography>

            <Typography component="h1" variant="h5" align="center">
            </Typography>

            <Typography component="p" variant="body1" align="justify">
            </Typography>

            {/* {certificateValue === "No" ? (
                <div>
                    <Typography component="p" variant="body1" align="justify">
                        {article2.content.certificates.clause.uncertificated}
                    </Typography>
                </div>
            ) : (
                    <div>
                        <Typography component="p" variant="body1" align="justify">
                            {article2.content.certificates.clause.certificated}
                        </Typography>
                    </div>
                )} */}

        </Paper>
    )
}