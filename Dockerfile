# pull official base image
FROM node:slim
# Create app directory
WORKDIR /usr/src/app
# copy app dependencies
COPY package*.json ./
# install app dependencies
RUN npm install --silent
# add app
COPY . ./
# start app
CMD ["npm", "start"]
