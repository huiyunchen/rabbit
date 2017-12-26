var express = require('express');
var port = 3000;
var app = express();
app.set('views', './views');
app.set('view engine', 'jade');
app.listen(port);
console.log('app started on port '+port);

require('./router').router(app);