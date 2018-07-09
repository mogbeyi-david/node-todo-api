const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {MongoClient, ObjectID} = require('mongodb');
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  "use strict";
  const todo = Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc)
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  "use strict";
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  "use strict";
  const id = req.params.id;
  User.find({
    _id: id
  }).then((users) => {
    "use strict";
    if (users.length === 0) {
      return res.send('User not found')
    }
    res.send(users);
  }).catch((e) => {
    res.send(e)
  });
});

app.post('/user', (req, res) => {
  "use strict";
  const user = User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  user.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/users', (req, res) => {
  "use strict";
  User.find().then((users) => {
    res.send({users});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.delete('/todos/:id', (req, res) => {
  "use strict";
  const id = req.params.id;
  Todo.findByIdAndRemove({_id: id}).then((todo) => {
    res.send(todo);
  });
});

app.patch('/todos/:id', (req, res) => {
  "use strict";
  const id = req.params.id;
  const body = _.pick(req.body, ['text', 'completed']);
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(3000, () => {
  "use strict";
  console.log('Server is up on port 3000');
});