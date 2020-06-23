// treat path params as query - same as how next api handle this
import {Router} from './interfaces';
import {NextApiRequest, NextApiResponse} from 'next';
import {json, text, urlencoded} from 'body-parser/index';
import cors from 'cors/lib/index';
import {mergePathParamsToQueryMiddleware} from '../middlewares/mergePathParamsToQueryMiddleware';
import {errorInterceptorMiddleware} from '../middlewares/errorInterceptorMiddleware';

export function routes(route: Router<NextApiRequest, NextApiResponse>) {

  route.use(mergePathParamsToQueryMiddleware);
  route.use(errorInterceptorMiddleware);
  // body parser
  route.use(json());
  route.use(urlencoded({extended: true}));
  route.use(text());

  const corsOrigin = cors({origin: true});

  // cors
  route.get('/api/cors', corsOrigin as any, (req, res) => res.json({message: 'OK'}));
  // path params
  route.get('/api/user/:id', corsOrigin as any, (req, res) => res.json({id: req.query.id}));

  return route;
}
