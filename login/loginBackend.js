/*  try {
      if (loginDetails[username] == password) {
        throw 'Correct!'
      } else if (loginDetails[username] == undefined){
        throw 'This username does not exist'
      } else {
        throw 'Incorrect password'
      }
    }
    catch(err) {
      document.getElementById('incorrect-login').innerText = err
    }


const fs = require('fs');
let obj;
fs.readFile('./login-details.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  console.log(obj);
});

*/
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello')
  console.log(req)
});
console.log('test');

app.listen(5500);