import express from 'express'
import { engine } from 'express-handlebars'

import routes from './routes/index.routes.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Statics folder config
app.use(express.static('src/public'))

// Handlebars config
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', 'src/views')

// HTTP Server routes
app.use(routes)

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`🚀 Server started on port http://localhost:${PORT}`)
})

server.on('error', (err) => console.log(err))