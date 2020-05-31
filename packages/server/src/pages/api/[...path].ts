import polka from 'polka';
import { routes } from '../../server/routers/routes';

let _router;
export function getRouter() {
  return _router || (_router = routes(polka()));
}
export function handleRequest(req, res) {
  getRouter().handler(req, res);
}

export default handleRequest;
export const config = {
  api: {
    bodyParser: false,
  },
};
