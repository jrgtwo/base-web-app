import type { RequestHandler } from 'express';
export const timeTracker: RequestHandler = (req, _, next) => {
  console.log('Time: ', Date.now(), ' Path: ', req.path);
  next();
};
