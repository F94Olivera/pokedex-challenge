FROM node:slim

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . ./

CMD ["npm", "start"]

# docker build -t pokedex:dev .

#   docker run \
#   -it \                               interactive mode
#   --rm \                              rm after exit
#   -v ${PWD}:/app \                    mnt in app
#   -v /app/node_modules \              mnt node_modules
#   -p 3000:3000 \                      ports
#   -e CHOKIDAR_USEPOLLING=true \       hotreload
#   pokedex:dev