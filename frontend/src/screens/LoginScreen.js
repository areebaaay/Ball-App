import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {} from 'module';
import { login } from '../actions/userActions';
import { Link } from 'react-router-dom';
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

const LoginScreen = ({ location }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split('=')[1] : '/';

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const classes = useStyles();
  return (
    <form className={classes.formContainer} onSubmit={submitHandler}>
      <Typography variant="h3">Login</Typography>
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

      <div>
        {/* <Button color="primary" variant="contained"> */}
        <Link
          style={{
            textDecoration: 'none',
            color: 'primary',
          }}
          to={redirect ? `/register?redirect=${redirect}` : '/register'}>
          Dont have an account? Register
        </Link>
        {/* </Button> */}
      </div>
      <div>
        <Button type="submit" color="primary" variant="contained">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginScreen;
