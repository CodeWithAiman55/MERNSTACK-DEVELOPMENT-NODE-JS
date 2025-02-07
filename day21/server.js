const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const sessions = {};

const isAuthenticated = (req, res, next) => {
  const sessionId = req.cookies.sessionId;

  if (sessionId && sessions[sessionId]) {
      req.user = sessions[sessionId].user;
      next(); 
  } else {
      res.status(401).send("Unauthorized access. Please log in first.");
  }
};

app.use('/dashboard', isAuthenticated);

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const users = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' }
    ];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const sessionId = Math.random().toString(36).substring(2, 15);

        sessions[sessionId] = { user };

        res.cookie('sessionId', sessionId, { maxAge: 900000, httpOnly: true });

        res.redirect('/dashboard');
    } else {
        res.status(401).send('Invalid username or password');
    }
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.get('/logout', (req, res) => {
    const sessionId = req.cookies.sessionId;

    if (sessionId && sessions[sessionId]) {
        delete sessions[sessionId];
    }

    res.clearCookie('sessionId');

    res.redirect('/login');
});

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/login">Login</a>');
});

app.use((req, res) => {
    res.status(404).send("Sorry, the page you requested could not be found.");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});