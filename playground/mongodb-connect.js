// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err)
    {
        return console.log('Unable To Connect To MongoDB Server');
    }
    console.log('Connected to the Server');

    var db = client.db('TodoApp');
    
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err)
    //     {
    //         return console.log('Unable to insert Todo',err);
    //     }
        
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //Insert new doc in Users (name, age, location)
    // db.collection('Users').insertOne({
    //     name:'Karamjeet',
    //     age: '27',
    //     location: 'New Delhi,India'
    // }, (err, result) => {
    //     if(err)
    //     {
    //         return console.log('Unable to Insert New User', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    client.close();
});