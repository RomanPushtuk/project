FROM node:16-alpine as build
WORKDIR /app
COPY package.json /app/package.json
RUN npm cache clear --force
RUN npm install -g npm@8.7.0
RUN npm install -g cross-env@7.0.3
RUN npm install -g webpack-cli@4.9.2
RUN npm install -g webpack@5.72.0
RUN npm install
COPY . /app
RUN npm run build
FROM nginx:1.20.2-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
