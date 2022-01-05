var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('databaseData.properties');

const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );


app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization, Content-Length, X-Requested-With, Accept');
    next();
  });
/*  
app.use(function(req, res, next) {
    
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
*/
//app.use(bodyParser.json);

var con = mysql.createConnection({
    host: properties.get("hostname"),
    user: properties.get("username"),
    password: properties.get("password"),
    database: properties.get("database")
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connected');
});


app.get('/studentdetail', (req,respose)=>{
     con.query('select *from student', (err, res)=>{
      respose.json(res);
     });
     
});


app.get('/edit/:rollno', (req,respose)=>{
    console.log('radhe krishna rollno');
    console.log('rollno :'+req.params.rollno)
    con.query('select *from student where rollno='+req.params.rollno, (err, res)=>{

     respose.json(res);
    });
    
});

app.get('/delete/:id',(req,res)=>{
    console.log('delete roll no: '+req.params.id);
    con.query('delete from student where rollno='+req.params.id,(err,res)=>{
        
    });
    
});

app.post('/update', (req,respose)=>{
    console.log('radhe krishna rollno');
    var rollno = req.body.rollno;
   var name = req.body.name;
   var dob = req.body.dob;
   var marks = req.body.marks; 
    console.log('update student set name="'+name+'", dob="'+dob+'", marks='+marks+' where rollno='+rollno);
    con.query('update student set name="'+name+'", dob="'+dob+'", marks='+marks+' where rollno='+rollno, (err, res)=>{

     respose.json(res);
    });
    
});

app.get('/search/:rollno', (req,respose)=>{
    console.log('search entry');
    var rollno = req.params.rollno;
   
    console.log('select *from student where rollno='+rollno);
    con.query('select *from student where rollno='+rollno, (err, res)=>{
        if (err) respose.json('data not found');
     respose.json(res);
    });
    
});

app.post('/studentdetail', (req, res) => {

    console.log('ok coming ');
   var rollno = req.body.rollno;
   var name = req.body.name;
   var dob = req.body.dob;
   var marks = req.body.marks; 
   
   
    console.log(rollno + " ok dfd " + name + " radhe  " + dob + " sf " + marks);
    var sql = "insert into student values(" + rollno + ", '" + name + "', '" + dob + "', " + marks + ")";
    con.query(sql, (err, result) => {
        if (err) { res.write('<html><body style="text-align="center";">Duplicate entry is found<br><br> please try again<br><br><a href="add">Back</a></body></html>'); } else {
            console.log('done! ');
            res.redirect('teacher');
        }
});
});



/*


app.post('/studentdetail', function (req, res) {
    console.log(req.body);
  res.send(req.body)
})
*/
app.listen(3000, () => {
    console.log("everything is ok port :3000");
});