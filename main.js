const { response } = require("express")
const http = require(`http`)
const httpStatus = require(`http-status-codes`)
const port = 3000

const app = http.createServer()

app.listen(port)

console.log(`The server has started and is listning on port number ${port}`)
