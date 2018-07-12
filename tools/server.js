const path = require('path');
const express = require('express');
const compression = require('compression');
const cors = require('cors');

const app = express();

app.use(compression());
app.use(cors());

app.use(express.static('dist'));
app.use(express.static('node_modules'));

app.use('*', function (req, res, next) {
  res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

// app.use('*', function (req, res, next) {
//   var filename = path.join(compiler.outputPath,'index.html');
//   devMiddlewareInstance.waitUntilValid(() => {
//     compiler.outputFileSystem.readFile(filename, function(err, result){
//       if (err) {
//         return next(err);
//       }
//       res.set('content-type','text/html');
//       res.send(result);
//       res.end();
//     });
//   });
// });

app.listen(3010, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Server running on http://localhost:3010');
  }
});