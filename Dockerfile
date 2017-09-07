FROM alexsuch/angular-cli:1.3.2 as builder

WORKDIR /app
COPY package.json /app
RUN npm install

COPY . /app
RUN ng build --prod

FROM nginx:1.12-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
