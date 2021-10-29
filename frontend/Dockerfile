FROM node as build
WORKDIR /frontend
COPY package.json .
RUN yarn
COPY . .
RUN yarn build

FROM nginx
COPY --from=build /frontend/dist /usr/share/nginx/html