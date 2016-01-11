var redis = require("redis"),
    client = redis.createClient();

client.on('error', function (err) {
    console.log('error event - ' + client.host + ':' + client.port + ' - ' + err);
});
var studentArray = [
    {name:'Sandeep', subject:'Computer', score:75, roll:'2'},
    {name:'John', subject:'Mathematics', score:175, roll:'3'},
    {name:'Kelly', subject:'computer', score:55, roll:'4'},
    {name:'Smith', subject:'Mathematics', score:35, roll:'1'}
];

client.set('StudentCache', "Sandeep", redis.print);

client.get('StudentCache', function (err,result) {
    console.log("studentList: ",result);
});



