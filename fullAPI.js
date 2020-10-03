var http = require("http");
var data = [ {name:"Ravindra",age:"20"},
            {name:"Sumit",aga:"22"},
            {name:"Ravi",age:"23"}
            ];
http.createServer(function(req,res){
    res.writeHead(201,{'Content-Type':'application\Json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(500);