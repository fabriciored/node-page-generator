interface Resp {
    download: Function
}

export const downloadPage = (response: Resp) => {
  const file = 'index.html'
  response.download(file)
}
