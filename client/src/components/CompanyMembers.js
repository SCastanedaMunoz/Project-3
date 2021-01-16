import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MemberCard from "./MemberCard";
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({

    card: {
        margin: "20px",
        padding: "20px"
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

export default function CompanyMembers({ members, handleMemberChange, deleteMember, addMember }) {

    const classes = useStyles();

    return (
        <Fragment>
            <Typography className={classes.title} variant="h6" gutterBottom>
                Company Members
            </Typography>

            <Grid item xs={12}>

                <MemberCard
                    members={members}
                    handleMemberChange={handleMemberChange}
                    deleteMember={deleteMember}
                ></MemberCard>

                <div className={classes.buttons}>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        onClick={addMember}
                    >
                        Add Member
                    </Button>
                </div >

            </Grid>
        </Fragment>

    )
}