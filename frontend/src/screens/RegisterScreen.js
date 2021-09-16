import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import { register } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(4),
    marginTop: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '70ch',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const RegisterScreen = ({ history, location }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const register = useSelector((state) => state.register);
  const { userInfo } = register;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('you clock register');
    dispatch(register(name, email, password));
  };

  const classes = useStyles();
  return (
    <form className={classes.formContainer} onSubmit={submitHandler}>
      <Typography variant="h3">Register</Typography>
      <TextField
        label="Name"
        variant="filled"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm Password"
        variant="filled"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <div>
        {/* <Button color="primary" variant="contained">
          Cancel
        </Button> */}
        <Button type="submit" color="primary" variant="contained">
          Register
        </Button>
      </div>
    </form>
  );
};

export default RegisterScreen;
