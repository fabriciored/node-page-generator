import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();
const port = 3000

app.get('/', (request: Request, response: Response) => {
    response.send(200)
})

app.listen(port)
console.log(`Server runs on port ${port}`)