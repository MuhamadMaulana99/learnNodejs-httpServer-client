import https from 'https';


const endPoint = 'https://hookb.in/wNol7JwNKJtqWVaqDpzG';
const request = https.request(endPoint, {
  method: "POST",
  headers: {
    "Content-type" : "application/json",
    "Accept" : "application/json"
  }
}, (response) =>{
  response.addListener("data", (data) =>{
    console.info(`Receive Data : ${data.toString()}`);
  })
});
const body = JSON.stringify({
  firstName : "Muhamad",
  lastName: "Maulana"
})

request.write(body);
request.end();