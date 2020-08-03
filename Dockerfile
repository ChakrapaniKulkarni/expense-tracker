#Step-1 is to create the build folder by installing the packages
FROM node:alpine as builder
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#Step 2 run it in a nginx
FROM nginx
COPY --from=builder /usr/app/build /usr/share/nginx/html
