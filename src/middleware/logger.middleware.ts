import { Request, Response } from 'express';

export function logger(req: Request, res: Response, next) {
  const prettyMethod = `\x1b[36m${req.method}\x1b[0m`;
  const prettyUrl = `\x1b[32m${req.originalUrl}\x1b[0m`;
  process.stdout.write(`${new Date()} - ${prettyMethod} ${prettyUrl} from ${req.ip}\n`);
  next();
}
