import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import config from './config/config';
import authRouter from './routes/auth.route';
import categoryRouter from './routes/category.route';

const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));


// enable cors
app.use(cors());
app.options('*', cors());


// v1 api routes
app.use('/api/auth', authRouter);
app.use('/api/categories', categoryRouter);


export default app;
