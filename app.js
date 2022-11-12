const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes.js');

// express app
const app = express();

//connect mongodb connection
const dbURI ='mongodb+srv://blog-creator:blog-creator@blog.dm0zbcz.mongodb.net/KKT-Blogs?retryWrites=true&w=majority';

mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true })
    .then((result)=>{
        console.log('DB was connected successfully');
        // listen for request
        app.listen(3000,()=>{
            console.log("listen for port")
        });
    })
    .catch((err)=>{console.log(err);});


// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

//blog routes
app.use('/blogs',blogRoutes);

