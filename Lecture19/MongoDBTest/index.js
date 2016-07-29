/**
 * Created by championswimmer on 29/07/16.
 */
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// Connection URL 
const url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
    if (err != null) {
        throw err;
    }
    console.log("Connected correctly to server");
    let students = db.collection('students');

    students.find().sort(['age', -1]).toArray(function(err, data) {
        if (err) { throw err};
        for (student of data) {
            console.log(student);
        }
        db.close();
    
    })

    


});

function updateAgeMany(stuColl, done) {
    stuColl.updateMany( {age: 17},
        {$set: {age: 5}},
        {w: 1, wtimeout: 2000},
        (err, status) => {
            if (err) { throw err }
            console.log(status);
            done()
        } )
}


function updateAgeOne(stuColl, done) {
    stuColl.updateOne( {age: 20},
        {$set: {age: 21}},
        (err, status) => {
            if (err) { throw err }
            console.log(status);
            done()
    } )
}

function insertOneStudent(stuColl, stuData, done) {
    stuColl.insertOne( stuData, function (err, status) {
        if (err != null) {
            throw err;
        }
        console.log(status);
        done()
    });

}

function insertManyStudents (stuColl, stuDataArr, done) {
    stuColl.insertMany(stuDataArr, function (err, status) {
        if (err) {
            throw err;
        }
        console.log(status);
        done()
    });

}