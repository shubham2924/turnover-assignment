import { Server } from 'http';
import app from './app';
import config from './config/config';
import prisma from './client';
const port = config.port || 5000;


let server: Server;
prisma.$connect().then(() => {
    console.log('Connected to SQL Database');
    server = app.listen(port, () => {
      console.log(`Listening to port ${port}`);
    });
  });

  const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.log('Server closed');
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  };
  
  const unexpectedErrorHandler = (error: unknown) => {
    console.log(error);
    exitHandler();
  };
  
  process.on('uncaughtException', unexpectedErrorHandler);
  process.on('unhandledRejection', unexpectedErrorHandler);  