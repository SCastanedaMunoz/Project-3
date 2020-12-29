import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CompanyMembers from "../components/CompanyMembers";
import CompanyDetails from "../components/CompanyDetails";
import RegisteredAgent from "../components/RegisteredAgent";
import ClauseQuestions from "../components/ClauseQuestions";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import ContractView from "../components/ContractView";


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
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
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

function Main() {

    const classes = useStyles();

    // Step state and functions

    const [activeStep, setActiveStep] = React.useState(0);

    const steps = ['Members', 'Company', 'Registered Agent', 'Finish'];

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <CompanyMembers
                    members={members}
                    handleMemberChange={handleMemberChange}
                    addMember={addMember}
                />;
            case 1:
                return <CompanyDetails
                    handleCompanyDetailChange={handleCompanyDetailChange}
                />;
            case 2:
                return <RegisteredAgent
                    handleRADetailChange={handleRADetailChange}
                />;
            case 3:
                return <ClauseQuestions />;
            default:
                throw new Error('Unknown step');
        }
    }

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    // Member state and functions

    const [members, setMembers] = useState([{}]);

    const handleMemberChange = event => {
        const _tempMembers = [...members];
        _tempMembers[event.target.dataset.id][event.target.name] = event.target.value;
        setMembers(_tempMembers);
    }

    const addMember = () => {
        setMembers(previousMembers => [
            ...previousMembers,
            {}
        ]);
    }

    // Company state and functions

    const [companyDetails, setCompanyDetails] = useState({

    });

    const handleCompanyDetailChange = event => {
        const _tempCompanyDetails = { ...companyDetails };
        _tempCompanyDetails[event.target.name] = event.target.value;
        setCompanyDetails(_tempCompanyDetails);
    }

    // Registered agent state and functions

    const [raDetails, setRADetails] = useState({});

    const handleRADetailChange = event => {
        const _tempRADetails = { ...raDetails };
        _tempRADetails[event.target.name] = event.target.value;
        setRADetails(_tempRADetails);
    }

    // Contract clause state and functions

    const [contractClauses, setContractClauses] = useState({});

    // useEffect to log state

    useEffect(() => {
        console.log(members);
        console.log(companyDetails);
        console.log(raDetails);
    }, [members, companyDetails, raDetails]);

    return (
        <main className={classes.layout}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8} md={6}>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h4" align="center">
                            Generate Your Document
                        </Typography>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <Fragment>
                            {activeStep === steps.length ? (
                                <Fragment>
                                    <Typography variant="h5" gutterBottom>
                                        Thank you for your order.
                            </Typography>
                                    <Typography variant="subtitle1">
                                        Your order number is #2001539. We have emailed your order confirmation, and will
                                        send you an update when your order has shipped.
                            </Typography>
                                </Fragment>
                            ) : (
                                    <Fragment>
                                        {getStepContent(activeStep)}
                                        <div className={classes.buttons}>
                                            {activeStep !== 0 && (
                                                <Button onClick={handleBack} className={classes.button}>
                                                    Back
                                                </Button>
                                            )}
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={handleNext}
                                                className={classes.button}
                                            >
                                                {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                            </Button>
                                        </div>
                                    </Fragment>
                                )}
                        </Fragment>
                    </Paper>
                </Grid>
                <Grid xs={12} sm={8} md={6}>
                    <ContractView>

                    </ContractView>
                </Grid>
            </Grid>

        </main>
    );
}

export default Main;