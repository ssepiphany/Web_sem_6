import { MongoClient } from "mongodb";

const url = 'mongodb+srv://snagorna03:UUfeRznoJCiJfyu1@cluster0.gprkzjm.mongodb.net/test'

const client = new MongoClient(url);

let connection;

try{
    connection = await client.connect();
} catch (e){
    console.error(e);
}

const db = connection.db('db');

export default db;