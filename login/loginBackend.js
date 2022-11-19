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
const bodyParser = require('body-parser')

app.get('/loginBackend', (req, res) => {
  res.send(`Username: ${req.body[login-input]} \nPassword: ${req.body[password-input]}`)
});
console.log('test');

app.listen(5500);
