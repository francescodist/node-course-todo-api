// const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.error('Unable to connect to MongoDB');
    }
    console.log('Successfully connected to MongoDB');
    const db = client.db('TodoApp');

    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(result => {
        console.log(result);
    })

    // client.close();
});
