const express = require ("express")
 const app = express();
 const port =4000;
 const {ladate}=require('./midellwars/date')
 app.set('views','./views');
 app.set('view engine', 'pug');



app.use(ladate);
app.get('/', function(req, res){
    res.render('home');
 });
 app.get('/contactus', function(req, res){
   res.render('contact us');
});
app.get('/ourservices', function(req, res){
   res.render('our services');
});

 app.listen(port,()=>{
    console.log('The server is running');
 })