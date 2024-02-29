import { RequestHandler, Request, Response } from 'express';

export const catchAllHandler: RequestHandler = (_: Request, res: Response) => {
  res.status(404).send('its a 404');
};
