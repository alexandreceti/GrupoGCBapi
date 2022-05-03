FROM node:16.14.0-alpine as build

ENV NODE_ENV production

WORKDIR /home/app
RUN chown -R node:node /home/app
COPY --chown=node:node . .

USER node

RUN yarn install
RUN yarn build

FROM node:16.14.0-alpine

ENV NODE_ENV production

USER node
WORKDIR /home/app

COPY --from=build --chown=node:node /home/app/package*.json ./
COPY --from=build --chown=node:node /home/app/yarn* ./
COPY --from=build --chown=node:node /home/app/node_modules/ ./node_modules/
COPY --from=build --chown=node:node /home/app/.next/ ./.next/
CMD [ "yarn", "start" ]