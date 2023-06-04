import { NextFunction, Request, Response } from 'express';
import fs from 'fs';

type Tipo = 'completo' | 'simples';

export function logger(tipo: Tipo) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (tipo === 'completo') {
      const log = `${new Date().toISOString()}, ${req.url}, ${req.method}, ${req.httpVersion}, ${req.get('User-Agent')}`;
      saveLog(log);
      next();
    } else {
      const log = `${new Date().toISOString()}, ${req.url}, ${req.method}`;
      saveLog(log);
      next();
    }
  };
}

function saveLog(value: string) {
  const path = `${process.cwd()}/logs/logs.txt`;
  fs.appendFileSync(path, value + '\n', { encoding: "utf8", flag: "a+" });
}