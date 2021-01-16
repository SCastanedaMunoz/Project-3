import React, { useState } from "react";
import userAPI from "../../utils/userAPI";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
// Hamburger Stuff
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import FaceIcon from "@material-ui/icons/Face";
import GavelIcon from "@material-ui/icons/Gavel";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto",
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
    height: "100%",
    width: "250px",
    backgroundColor: "rgb(153, 153, 153)",
    color: "white",
    textShadow: "1px 2px 2px black",
  },
}));

export default function MaterialAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const redirectHome = () => {
    history.push("/");
  };

  const [open, setOpen] = useState(false);
  const [loggedIn, setStatus] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawer = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function logoutEvent(event) {
    event.preventDefault();
    userAPI
      .logoutUser()
      .then(() => {
        window.location.replace("/");
      })
      .catch((err) => console.log(err));
  }

  userAPI.getCurrentUser().then((result) => {
    if (result.data) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  });

  return (
    <div className={classes.root}>
      <AppBar position="absolute">
        <Toolbar>
        {loggedIn ? (
            <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawer}
          >
            <MenuIcon />
          </IconButton>
      ) : (
        <></>
      )}
          <Typography variant="h6" className={classes.title}>
            Formulater
          </Typography>
          {loggedIn ? (
            <Button color="inherit" onClick={logoutEvent}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={redirectHome}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {loggedIn ? (
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <div className={classes.Drawer}>
            <MenuList>
              <MenuItem>
                <GavelIcon
                  color="secondary"
                  style={{
                    textShadow: "1px 2px 2px black",
                    marginRight: "5px",
                  }}
                />
                Saved Documents
              </MenuItem>
              <MenuItem>
                <FaceIcon
                  color="secondary"
                  style={{
                    textShadow: "1px 2px 2px black",
                    marginRight: "5px",
                  }}
                />
                Profile
              </MenuItem>
              <MenuItem style={{ marginTop: "830px" }}>
                <SettingsIcon
                  color="secondary"
                  style={{
                    textShadow: "1px 2px 2px black",
                    marginRight: "5px",
                  }}
                />
                Settings
              </MenuItem>
            </MenuList>
          </div>
        </Drawer>
      ) : (
        <></>
      )}
    </div>
  );
}
