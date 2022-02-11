import express, { Application, Request, Response } from 'express'
import stream from 'stream'

import { generateHtmlString } from './services/page/generateHtmlString'

const app: Application = express()
const port = process.env.PORT || 3000
const router = express.Router()
let html: string

app.use(
  express.json({
    type: '*/*'
  })
)

app.get('/', (request: Request, response: Response) => {
  response.sendStatus(200)
})

router.post('/pageinfo', function (request: Request, response: Response, fs) {
  const values = Object.values(request.body)
  html = generateHtmlString(request.body)
  console.log('created with values: ', values)
  response.send(`
  Page created with properties: ${values}
  `)
})

app.get('/download', (request: Request, response: Response) => {
  const readStream = new stream.PassThrough()
  readStream.end(html)
  response.set('Content-disposition', 'attachment; filename=index.html')
  readStream.pipe(response)
})

app.use('/', router)
app.listen(port)
console.log(`Server runs on port ${port}`)
