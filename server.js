var express = require('express');

// Create app
var app = express();
const PORT = process.env.PORT || 3000;

// fix hhtp - https for openweathermap
app.use(function (req, res, next){
  if(req.beaders['x-forwareded-proto'] === 'http'){
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(port, function () {
  console.log('Express server is up on port' + PORT);
});
