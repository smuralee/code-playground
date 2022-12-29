FROM node:lts-slim

RUN useradd -u 101 alpha

RUN mkdir -p /home/alpha/app/node_modules && chown -R alpha:alpha /home/alpha/app
RUN mkdir -p /home/alpha/.npm && chown -R alpha:alpha /home/alpha/.npm

WORKDIR /home/alpha/app

USER alpha

COPY --chown=alpha:alpha package*.json ./

RUN npm install

COPY --chown=alpha:alpha . .

EXPOSE 8080

ENTRYPOINT ["node","app.js"]
