import React from 'react';
// import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import { addBall } from '../actions/ballActions';

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
  const [image, setImage] = useState('');
  const [inStock, setInStock] = useState(0);

  const dispatch = useDispatch();

  // const uploadFileHandler = async (e) => {
  //   // setImage({ file: e.target.files[0] })
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append('image', file);

  //   try {
  //     const config = {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     };

  //     const { data } = await axios.post('/api/upload', formData, config);

  //     setImage(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const onChange = (e) => {
  //   setImage({ file: e.target.files[0] });
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // // formData.append('myImage', this.state.file);
    // formData.append('myImage', image);
    // try {
    //   const config = {
    //     headers: {
    //       'content-type': 'multipart/form-data',
    //     },
    //   };
    //   const { data } = await axios.post('/api/upload', formData, config);
    //   setImage(data);
    // } catch (error) {
    //   console.log(error);
    // }

    dispatch(addBall(name, inStock, image));
  };

  const classes = useStyles();
  return (
    <form className={classes.formContainer} onSubmit={onSubmit}>
      <Typography variant="h3">Add Ball</Typography>
      <TextField
        label="Name"
        variant="filled"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="In Stock"
        variant="filled"
        required
        value={inStock}
        onChange={(e) => setInStock(e.target.value)}
      />
      <Button variant="contained" component="label">
        Upload Image
        <input
          name="myImage"
          type="file"
          hidden
          value={image}
          //onChange={onChange}
          onChange={(e) => setImage(e.target.value)}
        />
      </Button>
      <div>
        <Button type="submit" color="primary" variant="contained">
          Post
        </Button>
      </div>
    </form>
  );
};

export default RegisterScreen;
