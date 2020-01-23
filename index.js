const http = require("http");
const port = 8000;
const fs = require("fs");

const server = http.createServer(reqHandler);

function reqHandler(req, res){
    console.log(req.url);
    res.writeHead(200, {"content-type":"text/html"});

    let filePath;
    switch(req.url){
        case '/':
            filePath = './index.html';
            break;
        
        case '/profile':
            filePath = './profile.html';
            break;

        default:
            filePath = "./404.html"
    }

    fs.readFile(filePath, function(error, data){
        if(error) throw error;
        res.end(data);
    });
}

server.listen(port, function(error){
    if(error){
        console.log("Server not set up: ", error);
        return;
    }
    console.log("Server up and running in port", port);
});