const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id:'5b2bae4ae9ad398bd473ee27'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5b2bae4ae9ad398bd473ee27').then((todo) => {
    console.log(todo);
})