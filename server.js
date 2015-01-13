var express=require('express');
var hbs=require('hbs');
var path=require('path');
var bodyParser=require('body-parser')
//user model
var usersController=require('./controllers/users');

var app=express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html',hbs.__express);
app.use(bodyParser());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));






//routes
app.get('/',function(request,response){
    
//    console.log(users.getUsers());
response.render('index',{title:"home",
                         
                         users:usersController.getUsers
                        });
});
app.get('/users/:id',function(request,response){
    var user= usersController.getUser(request.params.id);
    response.render('profile',{title: "User Profile",
                               user:user });
});


app.get('/signup',function(request,response){
response.render('signup',{title: "signup"});
});
app.get('/login',function(request,response){
response.render('login',{title: "LogIn"});
});



app.post('/login',usersController.postLogin);



app.get('/aboutus',function(request,response){
response.render('aboutus',{title: "AboutUs"});
});
app.listen(3000);