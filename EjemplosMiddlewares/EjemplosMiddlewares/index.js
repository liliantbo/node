const cookieParser = require('cookie-parser');
const express = require('express');
const sessions = require("express-session");

const app = express();

const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret:"secretString",
    cookie: {maxAge: oneDay},
    saveUninitialized:false
}));
app.use(cookieParser);

//ONLY FOR TESTING
const myusername="user"
const mypassword = "password";



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/admin', (request, response) => {
    response.send("Section Only for Admins!");
});

app.get('/', (request, response) => {
    response.render("index");
});

app.get('/login', (request, response) => {
    response.render("login");
});

app.post('/login',(request, response)=>{
    const {username, password}= request.body;
    if (username == myusername && password==mypassword){
        request.session.user = username;
        return response.json({code:"ok", message:"success"});
    }
    response.json({code:"invalid", message:"username o password"})
})

app.listen(3000, () => {
    console.log('Ready in port 3000!')
});