var https = require('https');
function getAndPrintHTML (options) {

  https.get(options, function (response) {
    response.setEncoding('utf8');


    var chunk = "";
    response.on('data', function(data) {
      chunk += data;

    });

    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(chunk);
    });

  });
};

getAndPrintHTML({
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
});