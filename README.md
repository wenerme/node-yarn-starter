# Node Yarn2 Starter

Yarn2 Starter Template Project with a lot of features.

- Gitlab [wenerme/node-yarn-starter](https://gitlab.com/wenerme/node-yarn-starter) Mirrored from Github
  - Gitlab Pipeline [![pipeline status](https://gitlab.com/wenerme/node-yarn-starter/badges/master/pipeline.svg)](https://gitlab.com/wenerme/node-yarn-starter/-/pipelines)
  - Deployed Page [wenerme.gitlab.io/node-yarn-starter](https://wenerme.github.io/node-yarn-starter)
  - Build Docker Image `registry.gitlab.com/wenerme/node-yarn-starter:master`
  - Deploy Heroku - Need `HEROKU_API_KEY` Env Var
- Github [wenerme/node-yarn-starter](https://github.com/wenerme/node-yarn-starter)
  - Github Action [![Build](https://github.com/wenerme/node-yarn-starter/workflows/Build/badge.svg)](https://github.com/wenerme/node-yarn-starter/actions)
  - Deployed Page [wenerme.github.io/node-yarn-starter](https://wenerme.github.io/node-yarn-starter)
- Vercel Deploy - [yarn-berry-next-starter.now.sh](https://yarn-berry-next-starter.now.sh)
  - Stuck On [vercel/vercel#4436](https://github.com/vercel/vercel/issues/4436)
- Heroku Deploy - [node-yarn-starter.herokuapp.com](https://node-yarn-starter.herokuapp.com)
- Yarn 2
  - Loose PnP Mode - early stage of yarn berry
- monorepo
  - server
    - NextJS
      - Universal API Handler
        - Workaround Vercel 12 Lambada Limit
        - Easier to control apis
    - Jest
  - ui
    - Jest
    - Storybook 6
- typescript
- eslint
    - `yarn lint`
- prettier
    - `yarn format`

## How to use

```bash
git clone --depth=1 https://github.com/wenerme/node-yarn-starter my-app

# fresh repo
cd my-app && rm -rf .git && git init

# rename package
# maybe you should also manully change the license, repository, author etc.
sed -i 's#@wener/node-yarn-starter#@wener/my-app#g' package.json packages/*/package.json packages/**/*.{tsx,ts}
yarn

# done
# you can remove the subpackages you don't need
```

## Start

```bash
# Local Dev
# http://localhost:3000/
yarn dev

# ui - storybook dev
# http://localhost:6006/
yarn storybook:dev

# Production Start
docker run --rm -it -e PORT=3000 -p 3000:3000 registry.gitlab.com/wenerme/node-yarn-starter:master
```

## Heroku Deploy

```bash
# create you app
heroku apps:create node-yarn-starter
# create auth token
heroku authorizations:create -d 'Gitlab CI'
# Copy Token to Gitlab config as HEROKU_API_KEY
# Manual trigger gitlab Heroku Deploy JOB
```

# Dependencies

## Root Dependencies

```bash
# Prettier
yarn add -D prettier

# lint-staged
yarn add -D husky lint-staged

# eslint
yarn add -D eslint eslint-config-prettier eslint-plugin-jest eslint-plugin-react eslint-plugin-react-hooks
# typescript-eslint
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser

# lerna - Monorepo Publish
yarn add -W -D lerna
```

## Package Dependencies

```bash
# NextJS
yarn add next@latest react@latest react-dom@latest
yarn add --dev typescript @types/react @types/node

# NextJS Universal API Handling
yarn add polka cors body-parser

# Storybook
yarn add --dev @storybook/{react,addons}
yarn add --dev @storybook/addon-{actions,links,knob}
# Storybook storysource
yarn add --dev @storybook/source-loader @storybook/addon-storysource
# Storybook Test
yarn add --dev @storybook/addon-{storyshots}

# Testing
yarn add --dev jest ts-jest @types/jest
```

## Optional Database Dependencies

```bash
# database driver
yarn add pg
yarn add sqlite3
yarn add mysql
yarn add mysql2

# objection - model based dao access
yarn add objection knex

# typeorm - ORM based
yarn add typeorm
# required for decorate
yarn add reflect-metadata
```
