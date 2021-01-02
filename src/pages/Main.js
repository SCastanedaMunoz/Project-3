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
import { ContactSupport } from '@material-ui/icons';

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

    // Helper function for updating clause object values

    const updateClauseObjectValue = (articleState, key, newValue, setState) => {
        let _tempArticle = [...articleState];
        console.log(_tempArticle);
        let updateIndex = _tempArticle.findIndex(object => Object.keys(object)[0] === key.toString());
        console.log(updateIndex);
        _tempArticle[updateIndex] = { key: newValue }
        setState(_tempArticle);
    }

    // Contract clause state and functions

    const [contractHead, setContractHead] = useState({});
    const [article1State, setArticle1] = useState([{}]);
    const [article2State, setArticle2] = useState([{}]);
    const [article3State, setArticle3] = useState([{}]);
    const [article9State, setArticle9] = useState([{}]);

    const generateContractHead = () => {
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
                let { contractHead } = JSON;
                setContractHead({
                    heading: `${contractHead.heading} ${companyDetails.name}`,
                    intro: `${contractHead.clause1} ${companyDetails.effectiveDate} ${contractHead.clause2}`
                })
            })
            .catch(error => {
                console.log(error);
            })
    };

    const generateArticle1 = () => {
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
                let { article1 } = JSON;
                if (members.length < 2) {
                    let { article1SM } = article1;
                    let { article1Heading, article1Clauses } = article1SM;
                    setArticle1([
                        { heading: `${article1Heading}` },
                        { formation: `${article1Clauses.formation.heading} ${companyDetails.name} ${article1Clauses.formation.clause1} ${companyDetails.filingDate} ${article1Clauses.formation.clause2}` },
                        { name: `${article1Clauses.name.heading} ${article1Clauses.name.clause1} ${companyDetails.name} ${article1Clauses.name.clause2}` },
                        { duration: `${article1Clauses.duration.heading} ${article1Clauses.duration.clause}` },
                        { purpose: `${article1Clauses.purpose.heading} ${article1Clauses.purpose.clause1} ${companyDetails.businessPurpose} ${article1Clauses.purpose.clause2}` },
                        { principalOffice: `${article1Clauses.principalOffice.heading} ${article1Clauses.principalOffice.clause1} ${companyDetails.address1}, ${companyDetails.address2}, ${companyDetails.city}, ${companyDetails.state} ${companyDetails.zip} ${article1Clauses.principalOffice.clause2}` },
                        { registeredAgent: `${article1Clauses.registeredAgent.heading} ${article1Clauses.registeredAgent.clause1} ${raDetails.name} ${article1Clauses.registeredAgent.clause2} ${raDetails.address1}, ${raDetails.address2}, ${raDetails.city}, ${raDetails.state} ${raDetails.zip} ${article1Clauses.registeredAgent.clause3}` },
                        { definitions: `${article1Clauses.definitions.heading} ${article1Clauses.definitions.clause}` }
                    ])
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const generateArticle2 = () => {
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
                let { article2 } = JSON;
                if (members.length < 2) {
                    let { article2SM } = article2;
                    let { article2Heading, article2Clauses } = article2SM;
                    setArticle2([
                        { heading: `${article2Heading}` },
                        { initialMember: `${article2Clauses.initialMember.heading} ${article2Clauses.initialMember.clause}` },
                        { natureOfMembershipInterest: `${article2Clauses.natureOfMembershipInterest.heading} ${article2Clauses.natureOfMembershipInterest.clause}` }
                    ])
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const generateArticle3 = () => {
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
                let { article3 } = JSON;
                if (members.length < 2) {
                    let { article3SM } = article3;
                    let { article3Heading, article3Clauses } = article3SM;
                    setArticle3([
                        { heading: `${article3Heading}` },
                        { management: `${article3Clauses.management.heading} ${article3Clauses.management.clause}` },
                        { officers: `${article3Clauses.officers.heading} ${article3Clauses.officers.clause}` }
                    ])
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const generateArticle9 = () => {
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
                let { article9 } = JSON;
                if (members.length < 2) {
                    let { article9SM } = article9;
                    let { article9Heading, article9Clauses } = article9SM;
                    setArticle9([
                        { title: `${article9.article9SM.title}` },
                        { exculpation: `${article9.article9SM.content.exculpation.title}` },
                        article9.article9SM.content.exculpation.subclauses
                    ])
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    // Contract queston state and functions

    const [certificateValue, setCertificateValue] = useState("No");

    const handleCertificateChange = (event) => {
        setCertificateValue(event.target.value);
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
                let { article2 } = JSON;
                if (certificateValue === "Yes") {
                    console.log("If yes triggered: " + certificateValue);
                    let _tempArticle2 = [...article2State];
                    if (_tempArticle2.some(object => object.certificates)) {
                        let certIndex = _tempArticle2.findIndex(object => Object.keys(object)[0] === "certificates");
                        _tempArticle2[certIndex].certificates = `${article2.article2SM.article2Clauses.certificates.heading} ${article2.article2SM.article2Clauses.certificates.clause.uncertificated}`;
                    } else {
                        _tempArticle2 = [...article2State, { certificates: `${article2.article2SM.article2Clauses.certificates.heading} ${article2.article2SM.article2Clauses.certificates.clause.uncertificated}` }];
                    };
                    setArticle2(_tempArticle2);
                } else if (certificateValue === "No") {
                    console.log("If no triggered: " + certificateValue);
                    let _tempArticle2 = [...article2State];
                    if (_tempArticle2.some(object => object.certificates)) {
                        let certIndex = _tempArticle2.findIndex(object => Object.keys(object)[0] === "certificates");
                        _tempArticle2[certIndex].certificates = `${article2.article2SM.article2Clauses.certificates.heading} ${article2.article2SM.article2Clauses.certificates.clause.certificated}`;
                    } else {
                        _tempArticle2 = [...article2State, { certificates: `${article2.article2SM.article2Clauses.certificates.heading} ${article2.article2SM.article2Clauses.certificates.clause.certificated}` }];
                    }
                    setArticle2(_tempArticle2)
                };
            })
    }

    // useEffect to log state and fetch JSON data

    useEffect(() => {
        console.log(members);
        console.log(companyDetails);
        console.log(raDetails);
        console.log(contractHead);
        console.log(certificateValue);
        console.log(article1State);
        console.log(article2State);
        console.log(article3State);
        console.log(article9State);

    }, [members, companyDetails, raDetails, contractHead, certificateValue, article1State, article2State, article3State, article9State]);

    useEffect(() => {
        generateContractHead();
        generateArticle1();
    }, [companyDetails]);

    useEffect(() => {
        generateArticle1();
    }, [raDetails]);

    useEffect(() => {
        generateArticle2();
        generateArticle3();
        generateArticle9();
    }, [])

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
                            article1={article1State}
                            article2={article2State}
                            article3={article3State}
                            article9={article9State}
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