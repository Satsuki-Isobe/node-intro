const http = require(`http`)
const httpStatus = require(`http-status-codes`)
const port = 3000


const route = {
    "/info": "<h1>info</h1>",
    "/test": "<h1>test</h1>",
}

const app = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    if(route[req.url]) {
        res.end(route[req.url])
    } else {
        res.end("<h1>error</h1>")
    }
})


// const getJSONString = obj => {
//     return JSON.stringify(obj, null, 2)
// }

// app.on("request", (req, res) => {
//     let body = []
//     req.on("data", (bodyData) => {
//         body.push(bodyData)
//     })

//     req.on("end", () => {
//         body = Buffer.concat(body).toString()
//         console.log("リクエスト", body)
//     })
    
//     console.log(getJSONString(req.method))
//     console.log(getJSONString(req.url))
//     console.log(getJSONString(req.headers))
    
//     res.writeHead(httpStatus.OK, {
//         "Content-Type": "text/html"
//     })
//     let responseMessage = "<h1>Hello</h1>"
//     res.end(responseMessage)
// })

app.listen(port)

console.log(`The server has started and is listning on port number ${port}`)
