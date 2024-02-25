import type { RequestHandler } from 'express';
export const timeTracker: RequestHandler = (req, res, next) => {
    console.log('Time: ', Date.now(), ' Path: ', req.path)
    next()
}