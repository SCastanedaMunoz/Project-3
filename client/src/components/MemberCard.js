import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { InputAdornment } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

    layout: {
        position: "center",
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 1500,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    card: {
        margin: "20px",
        padding: "20px"
    },
    textfield: {
        margin: "5px",
        padding: "5px"
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

export default function MemberCard({ members, handleMemberChange, deleteMember }) {

    const classes = useStyles();

    const validatorSubmit = () => {

    }

    return (
        members.map((member, index) => {
            let memberID = `member-${index}`;
            return (
                <Card className={classes.card} key={memberID}>
                    <Typography className={classes.title} gutterBottom>
                        Member {index + 1}
                    </Typography>
                    <ValidatorForm
                        onSubmit={validatorSubmit}
                    >
                        <Grid item xs={12} className={classes.textfield}>
                            <TextValidator
                                required
                                name="name"
                                id={memberID}
                                label="Member Name"
                                value={member.name}
                                inputProps={{
                                    "data-id": index
                                }}
                                fullWidth
                                onChange={handleMemberChange}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.textfield}>
                            <TextValidator
                                required
                                name="address1"
                                id={memberID + "-address1"}
                                label="Address line 1"
                                value={member.address1}
                                inputProps={{
                                    "data-id": index
                                }}
                                fullWidth
                                onChange={handleMemberChange}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.textfield}>
                            <TextValidator
                                name={"address2"}
                                id={memberID + "-address2"}
                                label="Address line 2"
                                value={member.address2}
                                inputProps={{
                                    "data-id": index
                                }}
                                fullWidth
                                onChange={handleMemberChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.textfield}>
                            <TextValidator
                                required
                                name={"city"}
                                id={memberID + "-city"}
                                label="City"
                                value={member.city}
                                inputProps={{
                                    "data-id": index
                                }}
                                fullWidth
                                onChange={handleMemberChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.textfield}>
                            <TextValidator
                                required
                                name="state"
                                id={memberID + "-state"}
                                label="State"
                                value={member.state}
                                inputProps={{
                                    "data-id": index
                                }}
                                onChange={handleMemberChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.textfield}>
                            <TextValidator
                                required
                                name="zip"
                                id={memberID + "-zip"}
                                label="Zip / Postal code"
                                value={member.zip}
                                inputProps={{
                                    "data-id": index
                                }}
                                onChange={handleMemberChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.textfield}>
                            <TextValidator
                                required
                                name="contribution"
                                id={memberID + "-contribution"}
                                label="Capital Contribution"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={member.contribution}
                                inputProps={{
                                    "data-id": index
                                }}
                                onChange={handleMemberChange}
                                fullWidth
                                validators={['isNumber']}
                                errorMessages={['You must insert a number']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.textfield}>
                            <TextValidator
                                required
                                name="percentage"
                                id={memberID + "-percentage"}
                                label="Percentage Interest"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                                value={member.percentage}
                                inputProps={{
                                    "data-id": index
                                }}
                                onChange={handleMemberChange}
                                fullWidth
                                validators={['isNumber', 'maxNumber:100']}
                                errorMessages={['You must insert a number', 'Percentage cannot be greater than 100']}
                            />
                            {index >= 1 ? (
                                <Button variant="contained" color="secondary" className={classes.button} onClick={() => deleteMember(memberID)}>Delete</Button>
                            ) : null}
                        </Grid>
                    </ValidatorForm>
                </Card >
            )
        })
    )
}
