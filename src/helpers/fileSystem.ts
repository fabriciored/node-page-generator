import fs from 'fs'

export const callFileSystem = (path: string, content:string) => {
  fs.writeFile(
    `${path}`,
    `${content}`,
    function (err: any) {
      if (err) throw err
      console.log('file created')
    }
  )
}
