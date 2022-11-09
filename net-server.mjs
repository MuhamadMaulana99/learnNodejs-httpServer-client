import net from 'net';

const server = net.createServer((client) => {
  console.info('client connet');
  client.addListener((data) =>{
    console.info(`Receive data ${data.toString()}`);
    client.write(`hello ${data.toString()}\r\n`);
  })
});

server.listen(3000, 'localhost');