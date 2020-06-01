FROM node:12-alpine

RUN mkdir -p /app
WORKDIR /app

COPY .yarn/cache /app/.yarn/cache
COPY .yarn/plugins /app/.yarn/plugins
COPY .yarn/releases /app/.yarn/releases

COPY .yarnrc.yml /app
COPY yarn.lock /app
COPY package.json /app
COPY packages /app/packages
RUN yarn install --immutable --immutable-cache && yarn build

CMD [ "yarn", "start"]

#HEALTHCHECK --interval=5m --timeout=3s \
#  CMD sh -c 'curl -f "http://localhost:$${PORT:-3000}/" || exit 1'
