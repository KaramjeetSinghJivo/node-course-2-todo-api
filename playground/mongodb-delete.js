// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err)
    {
        return console.log('Unable To Connect To MongoDB Server');
    }
    console.log('Connected to the Server');

    var db = client.db('TodoApp');

    // DeleteMany
    // db.collection('Todos').deleteMany({
    //     text:'Eat Lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // DeleteOne
    // db.collection('Todos').deleteOne({
    //     text:'Eat Lunch'
    // }).then((result) => {
    //     console.log(result);
    // });
    
    // FindOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({
    //     name: 'Karamjeet'
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5b1e77a8de26d81b8daf6fea")
    }).then((result) => {
        console.log(result);
    });

    //client.close();
});