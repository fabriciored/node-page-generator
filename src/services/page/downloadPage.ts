interface Resp {
    download: Function
}

export const downloadPage = (response: Resp) => {
  const file = 'src/generated/index.html'
  response.download(file)
}
