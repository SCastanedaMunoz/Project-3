import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer'
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import FaceIcon from '@material-ui/icons/Face';
import GavelIcon from '@material-ui/icons/Gavel';
import DocumentModal from './DocumentModal';

import userAPI from "../../utils/userAPI";
import documentAPI from '../../utils/documentAPI';

const AppBarU = AppBar

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 'auto',
    },
    button: {
        display: "flex",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    Drawer: {
        height: "100%", width: "250px", backgroundColor: "rgb(153, 153, 153)", color: "white", textShadow: "1px 2px 2px black",
    }
}));


export default function MaterialAppBarUser({ setActiveStep, setCompanyDetails, setMembers, setRADetails, setCertificateTerm, setStandardVoteTerm, setTaxDistributionTerm, setPushPullTerm, setFiduciaryDutyTerm }) {

    const classes = useStyles();

    const [drawer, setDrawerOpen] = useState(false)

    const handleDrawerOpen = () => {
        setDrawerOpen(true)
    }

    const handleDrawerClose = () => {
        setDrawerOpen(false)
    }

    const [savedDocuments, setSavedDocuments] = useState([{}])

    const [documentModal, setDocumentModalOpen] = useState(false);

    const handleDocumentModalOpen = () => {
        setDocumentModalOpen(true);
        userAPI.getCurrentUser()
            .then(result => {
                console.log(result)
                const email = result.data.email;
                documentAPI.getUserDocuments(email)
                    .then(documents => {
                        console.log(documents)
                        setSavedDocuments(documents.data)
                        console.log(savedDocuments)
                    })
            })
    }

    const handleDocumentModalClose = () => {
        setDocumentModalOpen(false);
    };

    function logoutEvent(event) {
        event.preventDefault();
        userAPI.logoutUser().then(() => {
            window.location.replace("/");
        })
            .catch(err => console.log(err));
    };

    // const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    return (
        <div className={classes.root}>
            <AppBarU position="absolute">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Formulater
                    </Typography>
                    <Button color="inherit" onClick={logoutEvent}>Logout</Button>
                </Toolbar>
            </AppBarU>
            <Drawer
                anchor='left'
                open={drawer}
                onClose={() => setDrawerOpen(false)}
            >
                <div className={classes.Drawer}>
                    <MenuList>
                        <MenuItem>
                            <GavelIcon color="secondary" style={{ textShadow: "1px 2px 2px black", marginRight: "5px", }} />
                            <Button type="button" onClick={handleDocumentModalOpen}>Saved Documents</Button>
                        </MenuItem>
                        <MenuItem>
                            <FaceIcon color="secondary" style={{ textShadow: "1px 2px 2px black", marginRight: "5px", }} />
                            <Button type="button">Profile</Button>
                        </MenuItem>
                        {/* <MenuItem style={{ marginTop: "830px", }}>
                            <SettingsIcon color="secondary" style={{ textShadow: "1px 2px 2px black", marginRight: "5px", }} />
                            <Button type="button">Settings</Button>
                        </MenuItem> */}
                    </MenuList>
                </div>
            </Drawer>
            <DocumentModal
                documentModal={documentModal}
                savedDocuments={savedDocuments}
                setActiveStep={setActiveStep}
                setCompanyDetails={setCompanyDetails}
                setMembers={setMembers}
                setRADetails={setRADetails}
                setCertificateTerm={setCertificateTerm}
                setStandardVoteTerm={setStandardVoteTerm}
                setTaxDistributionTerm={setTaxDistributionTerm}
                setPushPullTerm={setPushPullTerm}
                setFiduciaryDutyTerm={setFiduciaryDutyTerm}
                handleDocumentModalClose={handleDocumentModalClose}
                handleDrawerClose={handleDrawerClose}
            />
        </div >
    )
}