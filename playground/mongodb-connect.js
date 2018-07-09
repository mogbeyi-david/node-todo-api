const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  "use strict";
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 4));
  // });

  db.collection('users').insertOne({
    username: 'Emmanuel Makandiwa',
    email: 'makandiwa@gmail.com',
    password: 'makandiwa'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to create connection', err);
    }
    console.log(result.ops[0]._id.getTimestamp());
    console.log(JSON.stringify(result.ops, undefined, 4));
  });

  db.close();
});