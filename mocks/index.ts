async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server')
    server.listen()
  } else {
    const { worker } = await import('./browser')
    worker.start({
      onUnhandledRequest(req, print) {
        if (req.url.pathname.startsWith('/loremflickr.com')) {
          return
        }
      }
    })
  }
}

export {
  initMocks
}
