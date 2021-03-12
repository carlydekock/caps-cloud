// From Lab:
// pickup.js will post the “pickup” message
// The order id and customer name can be randomized
// The queueArn must be the arn from the Queue you created for the vendor
// You can set this up in a number of ways:
// Each time you run it, it makes one pickup request (or a few, using a loop)
// Run it once, and have it make a new request every so often with a timer

//this will be what kicks things off - pickup event, generates the order randomly


'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
const sns = new AWS.SNS();
const faker = require('faker');

const topic = 'arn:aws:sns:us-west-2:374553861153:pickup';
// const orderItem = process.env[2];

const order = {
  orderId: faker.random.uuid(),
  customer: faker.name.findName(),
  vendorId: 'https://sqs.us-west-2.amazonaws.com/374553861153/flowers'
}


const params = {
  TopicArn: topic,
  Message: JSON.stringify(order),
};

setInterval(() => {

  sns.publish(params).promise().then(console.log).catch(console.error);

}, 5000);