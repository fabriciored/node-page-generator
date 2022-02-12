# Node.js HTML Page Generator API

<img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" width="100px">

This project is an custom HTML Page generator API built with Node.js and Express using Typescript;

### Installation

Run `npm install` to install project dependencies.

### Using

Run `npm run dev` to run nodemon.

*or*

Run `npm run build` to build and then `node build/index.js` run the project.

Send the page properties in a JSON HTTP post request to `/pageinfo` following the spec at apispec.json

Then send a GET request to `/download` to receive an index.html with chosen properties. 
### Roadmap

The project currently aims the following milestones:

- [x] Development enviroment and dependencies config
- [x] Initial proof of concept API
- [x] First app deploy on Heroku
- [ ] Update API values for page creation
- [ ] Build a method for concurrent use
- [ ] Build a Front-end app
