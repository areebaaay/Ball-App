import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../actions/userActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
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

const UpdateProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const login = useSelector((state) => state.login);
  const { userInfo } = login;

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!!');
    } else {
      dispatch(updateUserProfile({ id: userInfo._id, name, email, password }));
    }
  };

  const classes = useStyles();
  return (
    <form className={classes.formContainer} onSubmit={submitHandler}>
      <Typography variant="h4" color="primary">
        Update Profile
      </Typography>
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
        label=" Change Password"
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
        <Button type="submit" color="primary" variant="contained">
          Update
        </Button>
      </div>
    </form>
  );
};

export default UpdateProfileScreen;
