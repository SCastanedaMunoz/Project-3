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
import CompanyAgreementView from "../components/ContractViews/CompanyAgreementView";

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
                return <ClauseQuestions
                    certificateValue={certificateValue}
                    handleCertificateChange={handleCertificateChange}
                />;
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

    const [companyDetails, setCompanyDetails] = useState({});

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

    const [contractHead, setContractHead] = useState({});
    const [article1, setArticle1] = useState([{}]);
    const [article2, setArticle2] = useState([{}]);

    const getClauseData = () => {
        fetch("./data/clause-data.json", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(response => {
                return response.json();
            })
            .then(JSON => {
                let { contractHead, article1, article2 } = JSON;
                console.log(contractHead);
                setContractHead({
                    title: `${contractHead.title} ${companyDetails.name}`,
                    text: `${contractHead.clause1} ${companyDetails.effectiveDate} ${contractHead.clause2}`
                });
                setArticle1([
                    { "title": `${article1.title}` },
                    { "formation": `${article1.content.formation.title} ${companyDetails.name} ${article1.content.formation.clause1} ${companyDetails.filingDate} ${article1.content.formation.clause2}` },
                    { "name": `${article1.content.name.title} ${article1.content.name.clause1} ${companyDetails.name} ${article1.content.name.clause2}` },
                    { "duration": `${article1.content.duration.title} ${article1.content.duration.clause}` },
                    { "purpose": `${article1.content.purpose.title} ${article1.content.purpose.clause1} ${companyDetails.businessPurpose} ${article1.content.purpose.clause2}` },
                    { "principalOffice": `${article1.content.principalOffice.title} ${article1.content.principalOffice.clause1} ${companyDetails.address1}, ${companyDetails.address2}, ${companyDetails.city}, ${companyDetails.state} ${companyDetails.zip} ${article1.content.principalOffice.clause2}` },
                    { "registeredAgent": `${article1.content.registeredAgent.title} ${article1.content.registeredAgent.clause1} ${raDetails.name} ${article1.content.registeredAgent.clause2} ${raDetails.address1}, ${raDetails.address2}, ${raDetails.city}, ${raDetails.state} ${raDetails.zip} ${article1.content.registeredAgent.clause3}` },
                    { "definitions": `${article1.content.definitions.title} ${article1.content.definitions.clause}` }
                ])
            })
            .catch(error => {
                console.log(error);
            })
    };

    const [certificateValue, setCertificateValue] = useState('no');

    const handleCertificateChange = (event) => {
        setCertificateValue(event.target.value);
    };

    // useEffect to log state and fetch JSON data

    useEffect(() => {
        console.log(members);
        console.log(companyDetails);
        console.log(raDetails);
        console.log(contractHead)
    }, [members, companyDetails, raDetails, contractHead]);

    useEffect(() => {
        console.log("useEffect getClauseData");
        getClauseData();
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
                                                {activeStep === steps.length - 1 ?
                                                    'Finish' : 'Next'}
                                            </Button>
                                        </div>
                                    </Fragment>
                                )}
                        </Fragment>
                    </Paper>
                </Grid>
                <Grid xs={12} sm={8} md={6}>
                    {contractHead !== undefined ? (
                        <CompanyAgreementView
                            contractHead={contractHead}
                            article1={article1}
                        ></CompanyAgreementView>
                    ) : (
                            <div></div>
                        )}
                </Grid>
            </Grid>

        </main>
    );
}

export default Main;