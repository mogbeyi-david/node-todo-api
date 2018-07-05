const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  "use strict";
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');
  db.collection('Users').find({
    name: 'Amoo Abeeb Adesina'
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 4));
  }, (err) => {
    console.log('Unable to fetch Todos');
  });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos count: ', count);
  // }, (err) => {
  //   console.log('Unable to fetch Todos');
  // });
  //db.close();
});