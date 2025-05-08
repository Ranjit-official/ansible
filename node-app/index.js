const http = require("http");
const server = http.createServer((req, res) => {
    res.end("The Node app is running successfully Good night !!!!")
})

server.listen("3010", "127.0.0.1", (error) => {
    if (!error) {
        console.log("Finally runned successfully")
    }
})