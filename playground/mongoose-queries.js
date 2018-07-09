const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

const userId = '5b3f3f8031ab5e1f602d85e911';
// if(!ObjectID.isValid(id)){
//   console.log('ID is not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   "use strict";
//   console.log('Todos: ', todos);
// });

User.find({
  _id: userId
}).then((users) => {
  "use strict";
  if(users.length == 0){
    return console.log('Unable to find user');
  }
  console.log('Users: ', users);
}).catch((e) => {console.log("The ID is not of the Proper format.")});


// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   "use strict";
//   console.log('Todo: ', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   "use strict";
//   if(!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo: ', todo);
// }).catch((e) => {console.log(e)});