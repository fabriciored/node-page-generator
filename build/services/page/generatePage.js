"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePage = void 0;
const fileSystem_1 = require("../../helpers/fileSystem");
const generatePage = (props) => {
    const path = 'index.html';
    (0, fileSystem_1.callFileSystem)(path, `
  <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="icon" href="${props.iconUrl}" type="image">
            <title>${props.title}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        </head>
        <body>
            <style>
                :root {
                    --navbar-height: ${props.navbar.height}px;
                    --navbar-color: ${props.navbar.backgroundColor};
                    --background-color: ${props.pageBackgroundColor};
                    --section-background-color: ${props.section.backgroundColor};
                    --font-color: ${props.fontColor};
                }
                html, body, h1, h2 {
                    margin: 0;
                }
                h1, h2, h3, h4, h5, p, span {
                    text-align: center;
                    color: var(--font-color);
                }
                html {
                    margin: 0;
                    padding: 0;
                }
                body {
                    margin: 0;
                    padding: 0;
                    background-color: var(--background-color);             
                }
                .navbar {
                    background-color: var(--navbar-color) !important;                
                    height: var(--navbar-height)
                }
                .main {
                    margin-top: 30px;
                    background-color: var(--section-background-color)
                }
            </style>
    
    <nav class="navbar navbar-light navbar-bg">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="${props.navbar.logoUrl}" alt="" width="30" height="24">
            <h1>${props.navbar.headingText}</h1>
          </a>
        </div>
      </nav>     
      <div class="main container justify-content-center ">
      <h1>${props.section.headingText}</h1>
      <p>${props.section.paragraphText}</p>
      </div>       
        </body>
        </html>
  `);
};
exports.generatePage = generatePage;
//# sourceMappingURL=generatePage.js.map