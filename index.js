var http = require('http');
 
// Configurar una respuesta HTTP para todas las peticiones
function onRequest(request, response) {
  console.log("Peticion Recibida.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Aplicación ejemplo");
  response.end();
}
 
var server = http.createServer(onRequest);
 
// Escuchar al puerto 8080
server.listen(8080);
console.log("Servidor funcionando en http://localhost:8080/");
