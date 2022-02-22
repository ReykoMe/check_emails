## Installing dependencies for both parts
1. Install nodejs & npm 16.13 version & run in terminal `nvm install 16.13`:
   * [NVM for Linux](https://github.com/nvm-sh/nvm)
   * [NVM for Windows](https://github.com/coreybutler/nvm-windows)
2. Install [Docker](https://docs.docker.com/) & [Docker-compose](https://docs.docker.com/compose/install/)
3. Inside email_check root folder: `npm build:all` to build get builds of all apps
4. Enter a command `npm run all` for run all built versions in Docker (Docker Compose)  
Also you can start both apps separately (all folders are has its own node_modules and Dockerfile)

## Starting UI Application (dev)
1. Move to `ui` folder (cd ./ui)
2. Type `npm install` (optional, if dependencies are not installed yet)
3. Enter `npm start` and ui app will start on `http://localhost:3000`

## Starting server (dev)
1. Move to `server` folder (cd ./server)
2. Type `npm install` (optional, if dependencies are not installed yet)
3. Enter `npm run serve:dev`

