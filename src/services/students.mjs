import db from '../db/mongo.mjs';

const collection = db.collection('Students');

const getStudent = async (nickname) => {
    let result = await collection.findOne({nickname: nickname});
    return result;
}

const getAllStudents = async () => {
    let cursor = collection.find({});
    const results = await cursor.toArray();
    return results;
}

const saveStudent = async (data) => {
    let savedResult = await collection.insertOne(data);
        return savedResult;
}

export {
    getStudent,
    saveStudent,
    getAllStudents
}