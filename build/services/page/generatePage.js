"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePage = void 0;
const fileSystem_1 = require("../../helpers/fileSystem");
const generatePage = (props) => {
    const path = './src/generated/index.html';
    (0, fileSystem_1.callFileSystem)(path, `
  <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="icon" href="${props.logoUrl}" type="image">
            <title>${props.title}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        </head>
        <body>
            <style>
                :root {
                    --navbar-color: ${props.navbar.backgroundColor};
                    --background-color: ${props.pageBackgroundColor};
                    --font-color: ${props.fontColor};
                }
                html, body, h1, h2 {
                    margin: 0;
                }
                h1, h2, h3, h4, h5, p, span {
                    text-align: center;
                    color: var(--font-color, title, logoUrl, cardContent);
                }
                html {
                    margin: 0;
                    padding: 0;
                }
        
                body {
                    margin: 0;
                    padding: 0;
                    background-color: var(--background-color, title, logoUrl, cardContent);
                    
                }
    
                .navbar {
                    background-color: var(--navbar-color, title, logoUrl, cardContent) !important;                
                }
    
            </style>
    
    <nav class="navbar navbar-light navbar-bg">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="${props.logoUrl}" alt="" width="30" height="24">
            <h1>${props.title}</h1>
          </a>
        </div>
      </nav>
          
      <div class="main container d-flex justify-content-center ">
    
      </div>
    
      <main>
    
          </div>
    
    
      </main>
    
            
        </body>
        </html>
  `);
};
exports.generatePage = generatePage;
//# sourceMappingURL=generatePage.js.map