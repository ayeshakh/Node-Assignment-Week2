var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printHTML (html) {
  var result = html.toUpperCase();
  console.log(result);
}

getHTML(requestOptions, printHTML);