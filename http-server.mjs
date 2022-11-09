import http from 'http';


const server = http.createServer((request, response) => {

  console.info(request.method);
  console.info(request.url);
  // console.info(request.headers);

  if (request.method === "POST") {
    request.addListener('data', (data) => {
      response.setHeader("Content-Type", "application/json");
      response.write(data);
      response.end();
    })
  } else {
    if (request.url === '/maulana') {
      response.write("hello Maulana");
    } else {
      response.write("hello World");
    }
    response.end();
  }
});

server.listen(3000);