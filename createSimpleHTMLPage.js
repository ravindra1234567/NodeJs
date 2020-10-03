var http = require("http");
var uc = require("upper-case");
var page = `
            <table border="2px">
                <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Name</th>
                        <th>Age</th>
                    <tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</th>
                        <td>Ravindra</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>2</th>
                        <td>Sumit</td>
                        <td>22</td>
                    </tr>
                </tbody>
            </table>
            `;
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
res.write(uc.upperCase("Ravindra"));
res.end();
}).listen(4000);