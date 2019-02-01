FROM node:10.15 as build-phase
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# 2nd phase
FROM nginx
EXPOSE 80
COPY --from=build-phase /app/build /usr/share/nginx/html