import React, { useState } from 'react';
import userAPI from "../../utils/userAPI"
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
import SettingsIcon from '@material-ui/icons/Settings';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


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
    },
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


export default function MaterialAppBarU() {

    const classes = useStyles();

    const [drawer, setDrawerOpen] = useState(false)

    const handleDrawer = () => {
        setDrawerOpen(true)
    }

    const [modal, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    function logoutEvent(event) {
        event.preventDefault();
        userAPI.logoutUser().then(() => {
            window.location.replace("/");
        })
            .catch(err => console.log(err));
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBarU position="absolute">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawer}>
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
                            <Button type="button" onClick={handleModalOpen}>Saved Documents</Button>
                        </MenuItem>
                        <MenuItem>
                            <FaceIcon color="secondary" style={{ textShadow: "1px 2px 2px black", marginRight: "5px", }} />
                            <Button type="button">Profile</Button>
                        </MenuItem>
                        <MenuItem style={{ marginTop: "830px", }}>
                            <SettingsIcon color="secondary" style={{ textShadow: "1px 2px 2px black", marginRight: "5px", }} />
                            <Button type="button">Settings</Button>
                        </MenuItem>
                    </MenuList>
                </div>
            </Drawer>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={modal}
                onClose={handleModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modal}>
                    <div className={classes.paper}>

                        <Card>
                            <CardContent>
                                <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                    Company Agreement of Test LLC
                                </Typography>
                                <div className={classes.cardButtons}>
                                    <Button>Download</Button>
                                    <Button>View</Button>
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </Fade>
            </Modal>
        </div>
    )
}


