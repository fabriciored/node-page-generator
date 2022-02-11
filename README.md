# Node.js HTML Page Generator API

<img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg">>

This project is an custom HTML Page generator API built with Node.js and Express using Typescript;

### Installation

Run `npm install` to install project dependencies.

### Using

Run `npm run dev` to run nodemon.

*or*

Run `npm run build` to build and run the project.

Send the page properties in a JSON HTTP post request to `/pageinfo` following the spec:
`
{
  "navbar": {
    "height": 0,
    "backgroundColor": "",
    "hasLogo": true,
    "logoUrl": "",
    "logoWidth": 0,
	"logoHeight": 0,
    "hasHeading": true,
    "headingText": "",
    "hasCtaButton": true,
    "ctaButtonText": ""
  },
  "section": {
    "backgroundColor": "",
    "hasHeading": true,
    "headingText": "",
    "hasParagraph": true,
    "paragraphText": ""
  },
  "pageBackgroundColor": "",
  "fontColor": "",
  "title": "",
  "iconUrl": ""
}
`
Then send a GET request to `/download` to receive index.html with chosen properties. 
### Roadmap

The project currently aims the following milestones:

- [x] Development enviroment and dependencies config
- [x] Initial proof of concept API
- [x] First app deploy on Heroku
- [ ] Update API values for page creation
- [ ] Build a method for concurrent use
- [ ] Build a Front-end app
