const WebSocket = require('ws');

const main = () => {
  const wss = new WebSocket.Server({ port: 8080 });

  wss.on('connection', (event) => {
    console.log(`New client connetion!`)

    event.on('message', (data) => {
      console.log('Message from client: ', data.toString());
      event.send('Response ', data);
    })

    event.on('close', () => {
      console.log('connection closed...')
    })
  });
}
main();