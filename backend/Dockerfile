FROM node as build
WORKDIR /backend
COPY package.json .
RUN yarn
COPY . .
RUN npx prisma generate
RUN yarn build

FROM nginx
COPY --from=build /backend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "deamon off;"]