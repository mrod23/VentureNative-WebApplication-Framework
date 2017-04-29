FROM node:4

RUN npm install -g bower

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY bower.json /app
RUN bower install --allow-root

COPY . /app
ENV NODE_ENV="production"
RUN ./node_modules/webpack/bin/webpack.js
EXPOSE 5000
CMD ["node", "server.js"]

