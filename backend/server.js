
import express from "express";
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();

connectDB();

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  app.use(express.json()); 
  

  const PORT = process.env.PORT || 5000;

  app.listen(
    PORT,
    console.log(
      `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  );

// app.listen(5000 , console.log(`Server in running on port 5000`))