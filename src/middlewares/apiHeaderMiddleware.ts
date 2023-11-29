import { NextFunction, Request, Response } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const apiHeaderMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const authtoken = process.env.ACCESS_TOKEN_AUTH;
    req.headers['Content-Type'] = 'application/json';
    req.headers['Authorization'] = `Bearer ${authtoken}`;
    next();
};

export default apiHeaderMiddleware;