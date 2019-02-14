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

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c654525dbf1e51c23da131a')
    // }).toArray().then(docs => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, err => {
    //     console.error('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then(count => {
    //     console.log(`Todos count: ${count}`);
    // }, err => {
    //     console.error('Unable to fetch todos', err);
    // });
    db.collection('User').find({
        name: 'Fra'
    }).count().then(count => {
        console.log(`Users count: ${count}`);
    }, err => {
        console.error('Unable to fetch todos', err);
    });
    // client.close();
});
