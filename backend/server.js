import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cors from 'cors';
import path from 'path';
import uploadRoutes from './routes/uploadRoutes.js';
import ballRoutes from './routes/ballRoutes.js';

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(express.json());
app.use('*', (req, res, next) => {
  console.log('REQUEST RECIEVED', req.url, req.body);
  next();
});
app.use('/api/users', userRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/balls', ballRoutes);

const __dirname = path.resolve(); //since __dirname is not availble in es6 and only in common js so we are mimicing __dirname
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
console.log(path.join(__dirname, '/uploads'));
//making a folder static would make it accessible in the browser

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
