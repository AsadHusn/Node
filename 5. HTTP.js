http = require('http')

// server is an EventEmitter
server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Hello world')
        res.end()
    }
})



// register connection event
// server.on('connection', (socket)=>{
//     console.log("New connection establish")
// })

server.listen(3000)
console.log("new connection...")