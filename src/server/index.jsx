import http from 'http'
import router from './router'

const port = process.env.PORT || 8080

const server = http.createServer(router)
server.listen(port)
console.log(`Listening at http://localhost:${port}`) // eslint-disable-line no-console
