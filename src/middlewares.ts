import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  res.status(status).send({ error: message });
};
