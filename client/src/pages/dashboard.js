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
import BlankCompanyAgreementView from "../components/ContractViews/BlankCompanyAgreementView";
import ExhibitAView from '../components/ContractViews/ExhibitAView';
import BlankExhibitAView from '../components/ContractViews/BlankExhibitAView';
import AppBar from '../components/MaterialAppBar';

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
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(10),
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

function Dashboard() {
    const classes = useStyles();

    // Step state and functions to handle form flow

    const [activeStep, setActiveStep] = useState(0);

    const steps = ['Members', 'Company', 'Registered Agent', 'Finish'];

    // Form components are passed in order to a swtich

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

    // Functions for handling back and next buttons at bottom of form paper

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    // Member state and functions (Note: Members are the owners of the LLC and need to be listed on Exhibit A to the Company Agreement)

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

    // Company state and functions to handle company name, address, etc. (Note: These details are passed in as props to the Company Agreement heading and Article 1)

    const [companyDetails, setCompanyDetails] = useState({});

    const handleCompanyDetailChange = event => {
        const _tempCompanyDetails = { ...companyDetails };
        _tempCompanyDetails[event.target.name] = event.target.value;
        setCompanyDetails(_tempCompanyDetails);
    }

    // Registered agent state and functions (Note: These details are passed in as props to  Article 1)

    const [raDetails, setRADetails] = useState({});

    const handleRADetailChange = event => {
        const _tempRADetails = { ...raDetails };
        _tempRADetails[event.target.name] = event.target.value;
        setRADetails(_tempRADetails);
    }

    // Contract clause state and functions. Decided to handle each Article seperately for state management purposes.

    const [contractHead, setContractHead] = useState({});
    const [article1State, setArticle1] = useState([{}]);
    const [article2State, setArticle2] = useState([{}]);
    const [article3State, setArticle3] = useState([{}]);
    const [article4State, setArticle4] = useState([{}]);
    const [article5State, setArticle5] = useState([{}]);
    const [article6State, setArticle6] = useState([{}]);
    const [article7State, setArticle7] = useState([{}]);
    const [article8State, setArticle8] = useState([{}]);
    const [article9State, setArticle9] = useState([{}]);
    const [article10State, setArticle10] = useState([{}]);
    const [article11State, setArticle11] = useState([{}]);
    // TODO signature page and blocks
    const [exhibitAState, setExhibitA] = useState([{}]);

    // These generate functions are calling to a massive JSON file with all our Company Agreement content. The setters probably could have been dynamically generated. This is also extremely long, so we may want to try to move some or all of this out into on eor more util files. Not very DRY - sorry!

    // Also note that most of the generate functions are structured as if / else depending on how many members are inserted. If only one member is inserted, we use the "single member" or "SM" clauses from the JSON. If tow or more members are inserted, we use the "multi-member" or "MM" clauses from the JSON.

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
                } else {
                    let { article1MM } = article1;
                    let { article1Heading, article1Clauses } = article1MM;
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
                } else {
                    let { article2MM } = article2;
                    let { article2Heading, article2Clauses } = article2MM;
                    setArticle2([
                        { heading: `${article2Heading}` },
                        { initialMembers: `${article2Clauses.initialMembers.heading} ${article2Clauses.initialMembers.clause}` },
                        // { issuanceOfMembershipInterestsAfterFormationOfCompany: `${article2Clauses.issuanceOfMembershipInterestsAfterFormationOfCompany.heading} ${article2Clauses.issuanceOfMembershipInterestsAfterFormationOfCompany.clause}` },
                        { natureOfMembershipInterest: `${article2Clauses.natureOfMembershipInterest.heading} ${article2Clauses.natureOfMembershipInterest.clause}` },
                        { withdrawalOrExpulsionOfMember: `${article2Clauses.withdrawalOrExpulsionOfMember.heading}` },
                        article2Clauses.withdrawalOrExpulsionOfMember.subclauses,
                        { assignmentOfMembershipInterest: `${article2Clauses.assignmentOfMembershipInterest.heading} ${article2Clauses.assignmentOfMembershipInterest.clause}` },
                        // { admissionOfNewMembers: `${article2Clauses.admissionOfNewMembers.heading} ${article2Clauses.admissionOfNewMembers.clause}` },
                        { rightsAndDutiesOfAssigneeOfMembershipInterestBeforeMembership: `${article2Clauses.rightsAndDutiesOfAssigneeOfMembershipInterestBeforeMembership.heading}` },
                        article2Clauses.rightsAndDutiesOfAssigneeOfMembershipInterestBeforeMembership.subclauses,
                        { rightsAndLiabilitiesOfAssigneeOfMembershipInterestAfterBecomingMember: `${article2Clauses.rightsAndLiabilitiesOfAssigneeOfMembershipInterestAfterBecomingMember.heading}` }, article2Clauses.rightsAndLiabilitiesOfAssigneeOfMembershipInterestAfterBecomingMember.subclauses,
                        { representationsAndWarranties: `${article2Clauses.representationsAndWarranties.heading} ${article2Clauses.representationsAndWarranties.clause}` }
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
                } else {
                    let { article3MM } = article3;
                    let { article3Heading, article3Clauses } = article3MM;
                    setArticle3([
                        { heading: `${article3Heading}` },
                        { management: `${article3Clauses.management.heading} ${article3Clauses.management.clause}` },
                        { officersAndOtherAgents: `${article3Clauses.officersAndOtherAgents.heading} ${article3Clauses.officersAndOtherAgents.clause}` },
                        { locationOfMeetings: `${article3Clauses.locationOfMeetings.heading} ${article3Clauses.locationOfMeetings.clause}` },
                        { alternativeFormsOfMeeting: `${article3Clauses.alternativeFormsOfMeeting.heading}` }, article3Clauses.alternativeFormsOfMeeting.subclauses,
                        { participationConstitutesPresence: `${article3Clauses.participationConstitutesPresence.heading} ${article3Clauses.participationConstitutesPresence.clause}` },
                        { noticeOfMeetings: `${article3Clauses.noticeOfMeetings.heading} ${article3Clauses.noticeOfMeetings.clause}` },
                        { waiverOfNotice: `${article3Clauses.waiverOfNotice.heading} ${article3Clauses.waiverOfNotice.clause}` },
                        { whoMayCall: `${article3Clauses.whoMayCall.heading} ${article3Clauses.whoMayCall.clause}` },
                        // { quorumAndActOfMembersOrCommittee: `${article3Clauses.quorumAndActOfMembersOrCommittee.heading} ${article3Clauses.quorumAndActOfMembersOrCommittee.clause}` },
                        // { votesRequiredToApproveCertainActions: `${article3Clauses.votesRequiredToApproveCertainActions.heading} ${article3Clauses.votesRequiredToApproveCertainActions.clause}` },
                        { mannerOfVoting: `${article3Clauses.mannerOfVoting.heading} ${article3Clauses.mannerOfVoting.clause}` },
                        { actionByWrittenConsent: `${article3Clauses.actionByWrittenConsent.heading} ${article3Clauses.actionByWrittenConsent.clause}` },
                        { explicitVoteOrConsentRequired: `${article3Clauses.explicitVoteOrConsentRequired.heading} ${article3Clauses.explicitVoteOrConsentRequired.clause}` },

                    ])
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    const generateArticle4 = () => {
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
                let { article4 } = JSON;
                if (members.length < 2) {
                    let { article4SM } = article4;
                    let { article4Heading, article4Clauses } = article4SM;
                    setArticle4([
                        { heading: `${article4Heading}` },
                        { agreedCapitalContributions: `${article4Clauses.agreedCapitalContributions.heading} ${article4Clauses.agreedCapitalContributions.clause}` },
                        { additionalCapitalContributions: `${article4Clauses.additionalCapitalContributions.heading} ${article4Clauses.additionalCapitalContributions.clause}` }
                    ])
                } else {
                    let { article4MM } = article4;
                    let { article4Heading, article4Clauses } = article4MM;
                    setArticle4([
                        { heading: `${article4Heading}` },
                        { agreedCapitalContributions: `${article4Clauses.agreedCapitalContributions.heading} ${article4Clauses.agreedCapitalContributions.clause}` },
                        { additionalCapitalContributions: `${article4Clauses.additionalCapitalContributions.heading} ${article4Clauses.additionalCapitalContributions.clause}` },
                        { capitalAccounts: `${article4Clauses.capitalAccounts.heading} ${article4Clauses.capitalAccounts.clause}` }
                    ])
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const generateArticle5 = () => {
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
                let { article5 } = JSON;
                if (members.length < 2) {
                    let { article5SM } = article5;
                    let { article5Heading, article5Clauses } = article5SM;
                    setArticle5([
                        { heading: `${article5Heading}` },
                        { taxStatus: `${article5Clauses.taxStatus.heading} ${article5Clauses.taxStatus.clause}` }
                    ])
                } else {
                    let { article5MM } = article5;
                    let { article5Heading, article5Clauses } = article5MM;
                    setArticle5([
                        { heading: `${article5Heading}` },
                        { general: `${article5Clauses.general.heading} ${article5Clauses.general.clause}` },
                        { regulatoryAllocations: `${article5Clauses.regulatoryAllocations.heading} ${article5Clauses.regulatoryAllocations.clause}` },
                        { reporting: `${article5Clauses.reporting.heading} ${article5Clauses.reporting.clause}` }
                    ])
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const generateArticle6 = () => {
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
                let { article6 } = JSON;
                if (members.length < 2) {
                    let { article6SM } = article6;
                    let { article6Heading, article6Clauses } = article6SM;
                    setArticle6([
                        { heading: `${article6Heading}` },
                        { distributions: `${article6Clauses.distributions.heading} ${article6Clauses.distributions.clause}` },
                        { noDistributionUponWithdrawal: `${article6Clauses.noDistributionUponWithdrawal.heading} ${article6Clauses.noDistributionUponWithdrawal.clause}` }
                    ])
                } else {
                    let { article6MM } = article6;
                    let { article6Heading, article6Clauses } = article6MM;
                    console.log(article6Clauses);
                    setArticle6([
                        { heading: `${article6Heading}` },
                        { distributions: `${article6Clauses.distributions.heading} ${article6Clauses.distributions.clause}` },
                        // { requiredAnnualTaxDistribution: `${article6Clauses.requiredAnnualTaxDistribution.heading} ${article6Clauses.requiredAnnualTaxDistribution.clause}` }
                    ])
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const generateArticle7 = () => {
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
                let { article7 } = JSON;
                if (members.length < 2) {
                    let { article7SM } = article7;
                    let { article7Heading, article7Clauses } = article7SM;
                    setArticle7([
                        { heading: `${article7Heading}` },
                        { bankAccountsInvestments: `${article7Clauses.bankAccountsInvestments.heading} ${article7Clauses.bankAccountsInvestments.clause}` },
                        { booksAndRecords: `${article7Clauses.booksAndRecords.heading} ${article7Clauses.booksAndRecords.clause}` },
                        { fiscalYear: `${article7Clauses.fiscalYear.heading} ${article7Clauses.fiscalYear.clause}` }
                    ])
                } else {
                    let { article7MM } = article7;
                    let { article7Heading, article7Clauses } = article7MM;
                    setArticle7([
                        { heading: `${article7Heading}` },
                        { bankAccountsInvestments: `${article7Clauses.bankAccountsInvestments.heading} ${article7Clauses.bankAccountsInvestments.clause}` },
                        { booksAndRecords: `${article7Clauses.booksAndRecords.heading}` }, article7Clauses.booksAndRecords.subclauses,
                        { financialInformation: `${article7Clauses.financialInformation.heading} ${article7Clauses.financialInformation.clause}` },
                        { taxReturnsAndInformationGoverningDocuments: `${article7Clauses.taxReturnsAndInformationGoverningDocuments.heading} ${article7Clauses.taxReturnsAndInformationGoverningDocuments.clause}` },
                        { fiscalYear: `${article7Clauses.fiscalYear.heading} ${article7Clauses.fiscalYear.clause}` }
                    ])
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const generateArticle8 = () => {
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
                let { article8 } = JSON;
                if (members.length < 2) {
                    let { article8SM } = article8;
                    let { article8Heading, article8Clauses } = article8SM;
                    setArticle8([
                        { heading: `${article8Heading}` },
                        { assignmentPermitted: `${article8Clauses.assignmentPermitted.heading} ${article8Clauses.assignmentPermitted.clause}` },
                        { assignmentOfEntireInterest: `${article8Clauses.assignmentOfEntireInterest.heading} ${article8Clauses.assignmentOfEntireInterest.clause}` },
                        { assignmentofPartialInterest: `${article8Clauses.assignmentofPartialInterest.heading} ${article8Clauses.assignmentofPartialInterest.clause}` }
                    ])
                } else {
                    let { article8MM } = article8;
                    let { article8Heading, article8Clauses } = article8MM;
                    setArticle8([
                        { heading: `${article8Heading}` },
                        { rightOfFirstRefusal: `${article8Clauses.rightOfFirstRefusal.heading} ${article8Clauses.rightOfFirstRefusal.clause}` },
                        { deathOrDivocrceOfMemberOrSpouse: `${article8Clauses.deathOrDivocrceOfMemberOrSpouse.heading}` }, article8Clauses.deathOrDivocrceOfMemberOrSpouse.subclauses,
                        // { pushPullBuyout: `${article8Clauses.pushPullBuyout.heading}` }, article8Clauses.pushPullBuyout.subclauses,
                        { determinationOfPurchaseValue: `${article8Clauses.determinationOfPurchaseValue.heading}` }, article8Clauses.determinationOfPurchaseValue.subclauses,
                        { closingOfSalePaymentOfPurchasePrice: `${article8Clauses.closingOfSalePaymentOfPurchasePrice.heading} ${article8Clauses.closingOfSalePaymentOfPurchasePrice.clause}` },
                        { basisAdjustment: `${article8Clauses.basisAdjustment.heading} ${article8Clauses.basisAdjustment.clause}` }
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
                        { heading: `${article9Heading}` },
                        { exculpation: `${article9Clauses.exculpation.heading}` }, article9Clauses.exculpation.subclauses,
                        { scopeOfDutiesOfCoveredPersons: `${article9Clauses.scopeOfDutiesOfCoveredPersons.heading} ${article9Clauses.scopeOfDutiesOfCoveredPersons.clause}` },
                        { indemnification: `${article9Clauses.indemnification.heading} ${article9Clauses.indemnification.clause}` },
                        { expenses: `${article9Clauses.expenses.heading} ${article9Clauses.expenses.clause}` },
                        { insurance: `${article9Clauses.insurance.heading} ${article9Clauses.insurance.clause}` },
                        { durationOfProtection: `${article9Clauses.durationOfProtection.heading} ${article9Clauses.durationOfProtection.clause}` },
                    ])
                } else {
                    let { article9MM } = article9;
                    let { article9Heading, article9Clauses } = article9MM;
                    setArticle9([
                        { heading: `${article9Heading}` },
                        { exculpation: `${article9Clauses.exculpation.heading}` }, article9Clauses.exculpation.subclauses,
                        // { scopeOfDutiesOfCoveredPersons: `${article9Clauses.scopeOfDutiesOfCoveredPersons.heading} ${article9Clauses.scopeOfDutiesOfCoveredPersons.clause}` },
                        // { indemnification: `${article9Clauses.indemnification.heading} ${article9Clauses.indemnification.clause}` },
                        { expenses: `${article9Clauses.expenses.heading} ${article9Clauses.expenses.clause}` },
                        { insurance: `${article9Clauses.insurance.heading} ${article9Clauses.insurance.clause}` },
                        { durationOfProtection: `${article9Clauses.durationOfProtection.heading} ${article9Clauses.durationOfProtection.clause}` },
                    ])
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const generateArticle10 = () => {
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
                let { article10 } = JSON;
                if (members.length < 2) {
                    let { article10SM } = article10;
                    let { article10Heading, article10Clauses } = article10SM;
                    setArticle10([
                        { heading: `${article10Heading}` },
                        { eventsRequiringWindingUp: `${article10Clauses.eventsRequiringWindingUp.heading} ${article10Clauses.eventsRequiringWindingUp.clause}` },
                        { revocationOrReinstatement: `${article10Clauses.revocationOrReinstatement.heading} ${article10Clauses.revocationOrReinstatement.clause}` },
                        { windingUpAffairsAndDistributionOfAssets: [`${article10Clauses.windingUpAffairsAndDistributionOfAssets.heading}`, article10Clauses.windingUpAffairsAndDistributionOfAssets.subclauses] },
                        { termination: `${article10Clauses.termination.heading} ${article10Clauses.termination.clause}` },
                    ])
                } else {
                    let { article10MM } = article10;
                    let { article10Heading, article10Clauses } = article10MM;
                    setArticle10([
                        { heading: `${article10Heading}` },
                        { eventsRequiringWindingUp: `${article10Clauses.eventsRequiringWindingUp.heading} ${article10Clauses.eventsRequiringWindingUp.clause}` },
                        { revocationOrReinstatement: `${article10Clauses.revocationOrReinstatement.heading} ${article10Clauses.revocationOrReinstatement.clause}` },
                        { windingUpAffairsAndDistributionOfAssets: `${article10Clauses.windingUpAffairsAndDistributionOfAssets.heading}` }, article10Clauses.windingUpAffairsAndDistributionOfAssets.subclauses,
                        { termination: `${article10Clauses.termination.heading} ${article10Clauses.termination.clause}` },
                    ])
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const generateArticle11 = () => {
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
                let { article11 } = JSON;
                if (members.length < 2) {
                    let { article11SM } = article11;
                    let { article11Heading, article11Clauses } = article11SM;
                    setArticle11([
                        { heading: `${article11Heading}` },
                        { entireAgreement: `${article11Clauses.entireAgreement.heading} ${article11Clauses.entireAgreement.clause}` },
                        { amendments: `${article11Clauses.amendments.heading} ${article11Clauses.amendments.clause}` },
                        { governingLaw: `${article11Clauses.governingLaw.heading} ${article11Clauses.governingLaw.clause}` },
                        { bindingEffectNoThirdPartyBeneficiaries: `${article11Clauses.bindingEffectNoThirdPartyBeneficiaries.heading} ${article11Clauses.bindingEffectNoThirdPartyBeneficiaries.clause}` },
                        { certainDefinitionsAndConstruction1: `${article11Clauses.certainDefinitionsAndConstruction.heading} ${article11Clauses.certainDefinitionsAndConstruction.clause1}` }, article11Clauses.certainDefinitionsAndConstruction.subclauses1,
                        { certainDefinitionsAndConstruction2: `${article11Clauses.certainDefinitionsAndConstruction.clause2}` }, article11Clauses.certainDefinitionsAndConstruction.subclauses2
                    ])
                } else {
                    let { article11MM } = article11;
                    let { article11Heading, article11Clauses } = article11MM;
                    setArticle11([
                        { heading: `${article11Heading}` },
                        { notices: `${article11Clauses.notices.heading} ${article11Clauses.notices.clause}` },
                        { entireAgreement: `${article11Clauses.entireAgreement.heading} ${article11Clauses.entireAgreement.clause}` },
                        { amendments: `${article11Clauses.amendments.heading} ${article11Clauses.amendments.clause}` },
                        { governingLaw: `${article11Clauses.governingLaw.heading} ${article11Clauses.governingLaw.clause}` },
                        { powerofAttorney: `${article11Clauses.powerofAttorney.heading} ${article11Clauses.powerofAttorney.clause}` },
                        { bindingEffectNoThirdPartyBeneficiaries: `${article11Clauses.bindingEffectNoThirdPartyBeneficiaries.heading} ${article11Clauses.bindingEffectNoThirdPartyBeneficiaries.clause}` },
                        { counterparts: `${article11Clauses.counterparts.heading} ${article11Clauses.counterparts.clause}` },
                        { certainDefinitionsAndConstruction1: `${article11Clauses.certainDefinitionsAndConstruction.heading} ${article11Clauses.certainDefinitionsAndConstruction.clause1}` }, article11Clauses.certainDefinitionsAndConstruction.subclauses1,
                        { certainDefinitionsAndConstruction2: `${article11Clauses.certainDefinitionsAndConstruction.clause2}` }, article11Clauses.certainDefinitionsAndConstruction.subclauses2
                    ])
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const generateExhibitA = () => {
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
                let { exhibitA } = JSON;
                setExhibitA([
                    { heading: `${exhibitA.heading}` },
                    { memberNameAndAddress: `${exhibitA.memberNameAndAddress.heading}` },
                    { capitalContribution: `${exhibitA.capitalContribution.heading}` },
                    { percentage: `${exhibitA.percentage.heading}` }
                ])
            })

            .catch(error => {
                console.log(error);
            })
    }


    // Contract question state and functions. The clauses in the Company Agreement will dynamically update depending on how the questions are answered.

    // I only have one question / updater inserted at this point but will add more. We can probably dynamically update 5-10 clauses depending on how the user answers these questions.

    const [certificateValue, setCertificateValue] = useState("No");

    // The setter below is probably overcomplicated. It first checks to see if the key value for the updated object already exists. If so, it updates the object; if not, it creates the object. Without this, I was running into an issue where the clause was repeatedly rendered if the value changed multiple times.

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
                    let _tempArticle2 = [...article2State];
                    if (_tempArticle2.some(object => object.certificates)) {
                        let certIndex = _tempArticle2.findIndex(object => Object.keys(object)[0] === "certificates");
                        _tempArticle2[certIndex].certificates = `${article2.article2SM.article2Clauses.certificates.heading} ${article2.article2SM.article2Clauses.certificates.clause.uncertificated}`;
                    } else {
                        _tempArticle2 = [...article2State, { certificates: `${article2.article2SM.article2Clauses.certificates.heading} ${article2.article2SM.article2Clauses.certificates.clause.uncertificated}` }];
                    };
                    setArticle2(_tempArticle2);
                } else if (certificateValue === "No") {
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

    // useEffect functions to fetch JSON data and update applicable states as values change

    useEffect(() => {
        generateArticle1();
        generateArticle2();
        generateArticle3();
        generateArticle4();
        generateArticle5();
        generateArticle6();
        generateArticle7();
        generateArticle8();
        generateArticle9();
        generateArticle10();
        generateArticle11();
        generateExhibitA();
    }, []);

    // We only need to re-generate the Company Agreement heading and Article 1 for companyDetails and raDetails state changes

    useEffect(() => {
        generateContractHead();
        generateArticle1();
    }, [companyDetails, raDetails]);

    // We only need to re-generate Exhibit A for member state changes

    useEffect(() => {
        generateArticle1();
        generateArticle2();
        generateArticle3();
        generateArticle4();
        generateArticle5();
        generateArticle6();
        generateArticle7();
        generateArticle8();
        generateArticle9();
        generateArticle10();
        generateArticle11();
        generateExhibitA();
    }, [members])

    return (
        <main className={classes.layout}>
            <AppBar />
            <br />
            <Grid container spacing={4}>
                {/* Once the user gets to the end of the form questions (activeStep is greater than steps.length), the form paper will not render. */}
                {activeStep !== steps.length ? (
                    <Grid item xs={12} sm={8} md={6}>
                        <Paper className={classes.paper}>
                            <Typography component="h1" variant="h4" align="center">
                                Generate Your Document
                        </Typography>
                            <Stepper activeStep={activeStep} className={classes.stepper}>
                                {steps.map((label) => (
                                    // This is where the form components are rendered (depending on step)
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            <Fragment>
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
                                            {/* On the last step, the bottom button text changes from "Next" to "Finish." On Finish click, the form paper will dissapear because the step exceeds steps.lenght */}
                                            {activeStep === steps.length - 1 ?
                                                'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                </Fragment>
                            </Fragment>
                        </Paper>
                    </Grid>
                ) : null}
                {/* This is the Company Agreement paper with all needed states being passed into the applicable view */}
                <Grid xs={12} sm={8} md={6}>
                    {/* This ensure that the Company Agreement will only render once companyDetails start populating. Otherwise, there is a very prominant "undefined" rendering at the top of the Company Agreement */}
                    {companyDetails.name !== undefined ? (
                        <CompanyAgreementView
                            contractHead={contractHead}
                            article1={article1State}
                            article2={article2State}
                            article3={article3State}
                            article4={article4State}
                            article5={article5State}
                            article6={article6State}
                            article7={article7State}
                            article8={article8State}
                            article9={article9State}
                            article10={article10State}
                            article11={article11State}
                        ></CompanyAgreementView>
                    ) : (
                            // Before companyDetails are populated, we just render a blank contract with "Company Agreement" at the top. Could also do some sort of loading screen.
                            <BlankCompanyAgreementView></BlankCompanyAgreementView>
                        )}
                    {/* Same with Exhibit A. We only show the "true" Exhibit A view once members start being populated */}
                    {members[0].name !== undefined ? (
                        <ExhibitAView
                            exhibitA={exhibitAState}
                            members={members}
                        ></ExhibitAView>
                    ) : (
                            <BlankExhibitAView></BlankExhibitAView>
                        )}
                </Grid>
            </Grid>

        </main>
    );
}


export default Dashboard;