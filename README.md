# Yarn2 NextJS Starter

Yarn2 with NextJS and Gitlab CI

- Gitlab [wenerme/yarn-berry-next-starter](https://gitlab.com/wenerme/yarn-berry-next-starter) Mirrored from Github
  - Gitlab Pipeline [![pipeline status](https://gitlab.com/wenerme/yarn-berry-next-starter/badges/master/pipeline.svg)](https://gitlab.com/wenerme/yarn-berry-next-starter/-/commits/master)
- Vercel Deploy - [yarn-berry-next-starter.now.sh](https://yarn-berry-next-starter.now.sh)
  - Stuck On [vercel/vercel#4436](https://github.com/vercel/vercel/issues/4436)

## Features

- Yarn 2
- monorepo
  - server
    - NextJS
      - Universal API Handler
        - Workaround Vercel 12 Lambada Limit
        - Easier to control apis
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
