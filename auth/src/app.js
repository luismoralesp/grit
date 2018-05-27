// Load required packages
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const authController = require('./controllers/auth');
const oauth2Controller = require('./controllers/oauth');
const userController = require('./controllers/user');
const clientController = require('./controllers/client');

// Connect to the database
mongoose.connect(process.env.DATABASE_URL);

// Create our Express application
const app = express();

// Set view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Use the body-parser package in our application
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Use express session support since OAuth2orize requires it
app.use(
  session({
    secret: 'Super Secret Session Key',
    saveUninitialized: true,
    resave: true
  })
);

// Use the passport package in our application
app.use(passport.initialize());

// Create our Express router
const router = express.Router();

// Create endpoint handlers for /users
router
  .route('/users')
  .post(userController.addUsers)
  .get(authController.isAuthenticated, userController.getUsers);

// Create endpoint handlers for /clients
router
  .route('/clients')
  .post(authController.isAuthenticated, clientController.addClient)
  .get(authController.isAuthenticated, clientController.getClients);

// Create endpoint handlers for oauth2 authorize
router
  .route('/oauth/authorize')
  .get(authController.isAuthenticated, oauth2Controller.authorization)
  .post(authController.isAuthenticated, oauth2Controller.decision);

// Create endpoint handlers for oauth2 token
router
  .route('/oauth/token')
  .post(authController.isClientAuthenticated, oauth2Controller.token);

//Protected resource
router
  .route('/home')
  .get(authController.isAuthenticated, async (req, res, next) => {
    try {
      const InMemoryMongo = require('mongodb-memory-server').default;
      console.log(InMemoryMongo);
      const mongo = new InMemoryMongo();
      console.log(await mongo.getConnectionString());
      res.send('This is home');
    } catch (error) {
      next(error);
    }
  });

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(3000);
