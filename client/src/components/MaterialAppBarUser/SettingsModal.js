import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import userAPI from "../../utils/userAPI";
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
    cardTitle: {
        fontSize: 16,
        alignItems: "center"
    },
    cardButtons: {
        display: "flex",
        alignItems: "flex-end"
    }
}));


export default function SettingsModal({ settingsModal, handleSettingsModalClose }) {

    const classes = useStyles();

    return (
        <Modal
            className={classes.modal}
            open={settingsModal}
            onClose={handleSettingsModalClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={settingsModal}>
                {userAPI.getCurrentUser()
                    .then(result => {

                    })
                }
            </Fade>
        </Modal>
    )
}