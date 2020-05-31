# Yarn2 NextJS Starter

Yarn2 with NextJS and Gitlab CI

- Gitlab [wenerme/yarn-berry-next-starter](https://gitlab.com/wenerme/yarn-berry-next-starter) Mirrored from Github
  - Gitlab Pipeline [![pipeline status](https://gitlab.com/wenerme/yarn-berry-next-starter/badges/master/pipeline.svg)](https://gitlab.com/wenerme/yarn-berry-next-starter/-/commits/master)
- [ ] Zeit Deploy

## Features

- Yarn 2
- monorepo
  - server
    - NextJS
      - [ ] Universal API Handler
    - [ ] Jest
  - ui
    - [ ] Storybook
- typescript
- eslint
- prettier
- Gitlab CI
  - Build Docker Image `registry.gitlab.com/wenerme/yarn-berry-next-starter:master`
  - Heroku Deploy
    - Need `HEROKU_API_KEY` Env Var

## Start

```bash
# Local Start
yarn build
yarn start

# Production Start
docker run --rm -it -e PORT=3000 -p 3000:3000 registry.gitlab.com/wenerme/yarn-berry-next-starter:master
```
