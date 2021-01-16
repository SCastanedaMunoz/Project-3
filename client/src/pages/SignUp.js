import React, {useState} from 'react';
import userAPI from "../utils/userAPI"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {

    const [formObject, setFormObject] = useState({})
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = useState("")

  const handleClose = () => {
    setOpen(false);
  };


    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({ ...formObject, [name]: value })
  };

  
    function handleFormSubmit(event) {
      event.preventDefault();
      if (formObject.firstName && formObject.lastName && formObject.username && formObject.email && formObject.password) {
          userAPI.saveUser({
              firstName: formObject.firstName,
              lastName: formObject.lastName,
              username: formObject.username,
              email: formObject.email,
              password: formObject.password
          }).then(() => {setFormObject({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: ""
          })})
          .then(() => {
            userAPI.loginUser({
                username: formObject.username,
                password: formObject.password
              })
          })
          .then(() => {
            window.location.replace("/userDashboard");
          })
              .catch(err => {
                  const error = err.response.data.error.errors
                  if(error.username){
                    setMessage("This username has been taken. Please select another one.")
                  }
                  else if (error.email.kind === "unique"){
                    setMessage("This email is already in use. Please use a different email address.")
                  }
                  else if (error.email.kind === "user defined"){
                    setMessage("Not a valid email address. Please try again.")
                  }
                  console.log(err.response)
                  setOpen(true)
                }
              );
      }
    };




    const classes = useStyles();
    // const [age, setAge] = React.useState('');

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
        </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        {/* Maybe add later */}
                        {/* <FormControl required className={classes.formControl}>
                            <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={age}
                                onChange={handleChange}
                                className={classes.selectEmpty}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={17}>Under 18</MenuItem>
                                <MenuItem value={20}>18-30</MenuItem>
                                <MenuItem value={30}>31-54</MenuItem>
                                <MenuItem value={30}>31-54</MenuItem>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl> */}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={!(formObject.firstName && formObject.lastName && formObject.username && formObject.email && formObject.password)}
                        onClick={handleFormSubmit}
                    >
                        Sign Up
          </Button>
          <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Error!"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {message}
          </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Okay
          </Button>
              </DialogActions>
            </Dialog>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/" variant="body2">
                                Already have an account? Sign in
              </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}