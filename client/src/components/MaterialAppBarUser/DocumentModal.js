import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";

import documentAPI from '../../utils/documentAPI';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    table: {
        minWidth: 650,
    }
}));


export default function DocumentModal({ documentModal, savedDocuments, setDocumentID, setActiveStep, setCompanyDetails, setMembers, setRADetails, setCertificateTerm, setStandardVoteTerm, setTaxDistributionTerm, setPushPullTerm, setFiduciaryDutyTerm, handleDocumentModalClose, handleDrawerClose, onDelete }) {

    const classes = useStyles();

    return (
        <Fragment>
            <Modal
                // aria-labelledby="document-modal"
                // aria-describedby="transition-modal-description"
                className={classes.modal}
                open={documentModal}
                onClose={handleDocumentModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={documentModal}>
                    <div className={classes.paper}>
                        {savedDocuments.length < 1 ? (
                            <div>No saved documents to display!</div>
                        ) : (
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Company Name</TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {savedDocuments.map(document =>
                                                <TableRow key={document.docId}>
                                                    <TableCell component="th" scope="row">
                                                        {document.companyDetails !== undefined ? (
                                                            document.companyDetails.name
                                                        ) : null}
                                                    </TableCell>
                                                    <TableCell align="right"><Link to={{ pathname: "/dashboard", state: document }}> <Button onClick={() => {
                                                        setDocumentID(document.docId)
                                                        setActiveStep(document.step);
                                                        if (document.companyDetails !== undefined) {
                                                            setCompanyDetails(document.companyDetails);
                                                        };
                                                        if (document.members[0] !== undefined) {
                                                            setMembers(document.members);
                                                        };
                                                        if (document.raDetails !== undefined) {
                                                            setRADetails(document.raDetails);
                                                        };
                                                        setCertificateTerm(document.certificateTerm);
                                                        setStandardVoteTerm(document.standardVoteTerm);
                                                        setTaxDistributionTerm(document.taxDistributionTerm);
                                                        setPushPullTerm(document.pushPullterm);
                                                        setFiduciaryDutyTerm(document.fiduciaryDutyTerm)
                                                        handleDocumentModalClose();
                                                        handleDrawerClose();
                                                    }}>Edit</Button></Link></TableCell>
                                                    <TableCell align="right"><Button onClick={() => {
                                                        documentAPI.deleteDocument(document.docId);
                                                        onDelete();
                                                    }}>Delete</Button></TableCell>
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            )}
                    </div>
                </Fade>
            </Modal>
        </Fragment>
    )
}