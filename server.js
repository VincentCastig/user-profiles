const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')
const config = require('./config')
const profileCtrl = require('./controllers/profileCtrl');
const userCtrl = require('./controllers/userCtrl');

const port = 3000;
const app = express();
const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false, // check on resources you're trying to use
  resave: false
}));

app.use(express.static(__dirname + '/public'));
console.log(__dirname)

app.post('/api/login', userCtrl.login)
app.get('/api/profiles', profileCtrl.getFriendsProfiles)



app.listen(port, function(){
  console.log(`Dude, I'm listening on port ${port}`)
})
