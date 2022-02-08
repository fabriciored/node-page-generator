import express, { Application, Request, Response } from 'express'

import { generatePage } from './services/page/generatePage'

const app: Application = express()
const port = 3000
const router = express.Router()

app.use(express.json({
  type: '*/*'
}))

app.get('/', (request: Request, response: Response) => {
  response.send(200)
})

router.post('/generate', function (request: Request, response: Response) {
  const values = Object.values(request.body)
  generatePage(request.body)
  console.log('created with values: ', values)
  response.sendStatus(200)
})

app.use('/', router)
app.listen(port)
console.log(`Server runs on port ${port}`)
