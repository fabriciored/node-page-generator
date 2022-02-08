import express, { Application, Request, Response } from 'express'

import { generatePage } from './services/page/generatePage'
import { downloadPage } from './services/page/downloadPage'

const app: Application = express()
const port = process.env.PORT || 3000
const router = express.Router()

app.use(express.json({
  type: '*/*'
}))

app.get('/', (request: Request, response: Response) => {
  response.sendStatus(200)
})

app.get('/download', (request: Request, response: Response) => {
  downloadPage(response)
})

router.post('/generate', function (request: Request, response: Response, fs) {
  const values = Object.values(request.body)
  generatePage(request.body)
  console.log('created with values: ', values)
  response.sendStatus(200)
})

app.use('/', router)
app.listen(port)
console.log(`Server runs on port ${port}`)
