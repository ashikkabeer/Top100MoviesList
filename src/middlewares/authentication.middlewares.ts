
import { Request, Response, NextFunction } from 'express';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  // Check if user is authenticated
  if (req.isAuthenticated()) {
    // User is authenticated, proceed to the next middleware or route handler
    next();
  } else {