import React from 'react';
// Note that I am using a seperate stylesheet for the Company Agreement numbering. See note in stylesheet on one bug we will need to fix if possible.
import "./orderedlist.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
        minHeight: 500,
        maxHeight: 500,
        overflow: "auto"
    },
    table: {
        minWidth: 650,
    }
}));

export default function ExhibitAView({ exhibitA, members }) {

    const classes = useStyles();

    return (

        <Paper className={classes.paper} elevation={3}>

            <Typography component="h1" variant="h5" align="center">
                EXHIBIT A
            </Typography>

            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Member Name and Address</TableCell>
                        <TableCell align="right">Capital Contribution</TableCell>
                        <TableCell align="right">Percentage</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {members.map(member => (
                        <TableRow key={member.name}>
                            <TableCell component="th" scope="row">
                                {member.name} <br></br>
                                {member.address1} {member.address2} <br></br>
                                {member.city} {member.state} {member.zip}
                            </TableCell>
                            <TableCell component="th" scope="row" align="right">
                                {member.contribution}
                            </TableCell>
                            <TableCell component="th" scope="row" align="right">
                                {member.percentage}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )

}