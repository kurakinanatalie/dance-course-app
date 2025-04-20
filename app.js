const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const authRoutes = require('./routes/authRoutes');
app.use('/', authRoutes);

const dashboardRoutes = require('./routes/dashboardRoutes');
app.use('/', dashboardRoutes);

const courseRoutes = require('./routes/courseRoutes');
app.use('/', courseRoutes);

const classRoutes = require('./routes/classRoutes');
app.use('/', classRoutes);

const bookingRoutes = require('./routes/bookingRoutes');
app.use('/', bookingRoutes);

const { createOrganiser } = require('./models/user');
createOrganiser('admin', 'password123', () => console.log('Organiser created'));

// Mustache config
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET || 'cat',
  resave: false,
  saveUninitialized: true
}));

app.use((req, res, next) => {
    res.locals.isOrganiser = req.session.user && req.session.user.role === 'organiser';
    next();
  });
  

// Routes placeholder
app.get('/', (req, res) => {
  res.render('index', { user: req.session.user });
});

// Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});