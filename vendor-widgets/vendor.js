// From Lab:
// vendor.js should be an SQS Subscriber
// Connect it to the vendor’s queue by using it’s URL/ARN
// As drivers deliver, this app will continually poll the queue, retrieve them, and log details out to the console
// You should be able to disconnect this app, and see deliveries that happened while the app was not running


//listening for event to be published and emiting order is ready


'use strict';

const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/374553861153/widgets',
  handleMessage: handler
});

function handler(message) {
  console.log(message);
}

app.on('error', (err) => {
  console.error(err.message);
});
app.on('processing_error', (err) => {
  console.error(err.message);
});

app.start();
