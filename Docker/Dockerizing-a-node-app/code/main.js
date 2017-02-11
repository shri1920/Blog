const express = require('express'),
      app     = express();

app.set('port', 3000);

app.get('/', function (req, res) {
    res.send('Hello world\n');
});

app.listen(app.get('port'));
console.log('Sample node service Started @ ' + new Date() + ' Running on port no: ' + app.get('port'));