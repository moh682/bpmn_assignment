const fetch = require('node-fetch');

if (process.argv.length <= 2) {
  console.log('please pass a review after the file name');
  console.log('hint - The bad word is "shit"');
  return;
}

console.log('is sending fetch');

const url = 'http://localhost:8080/engine-rest/process-definition/key/profanity-validation/start';
const methodParam = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    variables: {
      review: {
        value: process.argv[2],
        type: 'string',
      },
    },
  }),
};

fetch(url, methodParam)
  .then((response) => console.log(response))
  .catch(function (error) {
    console.log(error);
  });
