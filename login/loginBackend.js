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
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/loginBackend', (req, res) => {
  var username = req.body['username-input']
  var password = req.body['password-input']
  res.send(`Username is:${username} \nPassword is: ${password}.`);
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});