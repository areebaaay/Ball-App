
import express from "express";
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';



dotenv.config();

connectDB();

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  app.use(express.json()); 

  app.use('/api/users', userRoutes);

//MIDDLEWARE
app.use(notFound);
app.use(errorHandler);
  

  const PORT = process.env.PORT || 5000;

  app.listen(
    PORT,
    console.log(
      `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  );

// app.listen(5000 , console.log(`Server in running on port 5000`))