
export const webSocketInit = (io) => {

  io.on('connection', (socket) => {

    console.log(`[io.on(connection)]: ⚡️ new client connection ${socket.io}`)


  })
}

