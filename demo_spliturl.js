var url = require('url');
var adr = 'http://localhost:8081/default.htm?year=2018&month=february';
var q = url.parse(adr,true);
console.log(q.host); //returns 'localhost:8081'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //return '?year=2018&month=feb'

var qdata = q.query; //returns an obj: {year:2018,month:'feb'}
console.log(qdata.month); //returns feb