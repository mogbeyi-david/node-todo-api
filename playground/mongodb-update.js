const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  "use strict";
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');
  //findOneAndUpdate
  db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('5b3dfdcc30a2ffc793a88753')
    }, {
      $set:
        {
          completed: true
        }
    }, {
      returnOriginal: false
    }
  ).then((result) => {
    console.log(result);
  })
  //db.close();
});