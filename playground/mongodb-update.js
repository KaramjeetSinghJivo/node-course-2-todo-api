// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err)
    {
        return console.log('Unable To Connect To MongoDB Server');
    }
    console.log('Connected to the Server');

    var db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b1e74c3de26d81b8daf6f08')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // Self Practice
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b178d7bc90aef462cc0928d')
    },{
        $set:{
            name:'Karamjeet'
        },
        $inc:{
            age: 2
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //client.close();
});