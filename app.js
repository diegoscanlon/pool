const express = require('express');
const sessions = require('express-session');
const path = require('path');

const app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(
    sessions({
      secret: 'some secret',
      cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 24 hours
      },
      resave: true,
      saveUninitialized: false,
    })
  );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home page
app.get('/', (req, res) => {
    if (req.session.userid) {
        res.redirect('/plan');
    }
    res.render('index.html');
})

// sign-up page
app.get('/signup', (req, res) => {
    
});

// log-in page
app.get('/login', (req, res) => {
    
});

app.get('/plan', (req, res) => {
    
});

app.get('/create-plan', (req, res) => {
    
});

app.use(express.static('front-end'));

app.listen(3000, () => {
    console.log(`Server listening on port 3000`);
});
