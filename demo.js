var redis = require("redis"),
    client = redis.createClient(),
    studentScores = [
        {name: 'Sandeep', subject: 'Computer', score: 75, roll: 'roll2'},
        {name: 'John', subject: 'Mathematics', score: 175, roll: 'roll3'},
        {name: 'Kelly', subject: 'computer', score: 55, roll: 'roll4'},
        {name: 'Smith', subject: 'Mathematics', score: 35, roll: 'roll1'}
    ];
//save the object as key-value pair
//roll will be key and value will be stringified of student object
studentScores.forEach(function(aStudent, i){
    client.set(aStudent.roll, JSON.stringify(aStudent), redis.print);
});
//get the object for roll1 and parse it to JSON and display properties
client.get('roll1', function (err,result) {
    var aStudent = JSON.parse(result)
    console.log("Typeof: "+typeof aStudent);
    console.log("Name: "+aStudent.name);
    console.log("Subject: "+aStudent.subject);
    client.quit();
});
client.on('error', function (err) {
    console.log('error event - ', err);
});