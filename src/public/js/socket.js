const socket = io()

socket.on('products', (data) => {

  // console.log('[socket.on(products)]: ', data)
  location.reload()

})

