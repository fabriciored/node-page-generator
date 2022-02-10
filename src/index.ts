import express, { Application, Request, Response } from 'express'
import stream from 'stream'

import { generatePage } from './services/page/generatePage'
import { downloadPage } from './services/page/downloadPage'
import { recievePageProps } from './services/page/recievePageProps'

const app: Application = express()
const port = process.env.PORT || 3000
const router = express.Router()

let html = ''

app.use(
  express.json({
    type: '*/*'
  })
)

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

router.post('/recieve', function (request: Request, response: Response, fs) {
  const values = Object.values(request.body)
  html = recievePageProps(request.body)
  console.log('created with values: ', values)
  response.sendStatus(200)
})

app.get('/retrieve', (request: Request, response: Response) => {
  const readStream = new stream.PassThrough()
  readStream.end(html)
  response.set('Content-disposition', 'attachment; filename=index.html')
  readStream.pipe(response)
})

app.use('/', router)
app.listen(port)
console.log(`Server runs on port ${port}`)
