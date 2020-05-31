// treat path params as query - same as how next api handle this
import { Router } from './interfaces';
import { NextApiRequest, NextApiResponse } from 'next';
import { json, text, urlencoded } from 'body-parser/index';
import cors from 'cors/lib/index';

function mergePathParamsToQuery(req, res, next) {
  // polka extra path params to params
  if (req.params) {
    const q = req.query;
    Object.entries(req.params).forEach(([k, v]) => (q[k] = q[k] ?? v));
  }
  return next();
}

function normalizeError(e) {
  return { status: e.status || 500, message: e.message || Object.prototype.toString.call(e) };
}

async function errorHandler(req, res, next) {
  try {
    return await next();
  } catch (e) {
    const detail = normalizeError(e);
    res.status(detail.status).json(detail);
    console.error(`ERROR Handle ${req.url}`, e);
  }
}

export function routes(route: Router<NextApiRequest, NextApiResponse>) {
  route.use(mergePathParamsToQuery);
  route.use(errorHandler);
  // body parser
  route.use(json());
  route.use(urlencoded({ extended: true }));
  route.use(text());

  const corsOrigin = cors({ origin: true });

  // cors
  route.get('/api/cors', corsOrigin as any, (req, res) => res.json({ message: 'OK' }));
  // path params
  route.get('/api/user/:id', corsOrigin as any, (req, res) => res.json({ id: req.query.id }));

  return route;
}
