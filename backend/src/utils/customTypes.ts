import { Request } from 'express';

// Define a custom interface for the request object
export interface CustomRequest extends Request {
    payload?: any; // Define the payload property
}