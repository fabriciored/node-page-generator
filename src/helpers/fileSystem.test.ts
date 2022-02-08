import { callFileSystem } from './fileSystem'
import fs from 'fs'

test('Returns writefile with correct parameters', () => {
  expect(callFileSystem('../', '<html><html>')).toBe(
    fs.writeFile('../', '<html><html>', function (err: any) {
      if (err) throw err
      console.log('file created')
    })
  )
})
