var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printHTML (html) {
  var result = html.toLowerCase();
  console.log(result);
}

getHTML(requestOptions, printHTML);