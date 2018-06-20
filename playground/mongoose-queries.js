const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');

// var id = '5b29cef7cc233526789999fc';

// if(!ObjectID.isValid(id))
// {
//     console.log('Id not Valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo)
//     {
//         return console.log('Id Not Found');
//     }
//     console.log('Todo By Id: ', todo)
// }).catch((e) => console.log(e));

Users.findById('5b1fd57f04fc3e16c8977ddc').then((user) => {
    if(!user)
    {
        return console.log('User Not Found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});
