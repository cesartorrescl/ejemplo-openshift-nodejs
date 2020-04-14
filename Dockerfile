FROM node
ADD . .
ENTRYPOINT ["node","index.js"]

