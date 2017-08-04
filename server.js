const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')
const config = require('./config')
const profileCtrl = require('./controllers/profileCtrl');
const userCtrl = require('./controllers/userCtrl');

const port = 3000;
const app = express();

app.use(bodyParser.json())
app.use(cors())
app.use(session({ secret: config.sessionSecret}));

const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))
app.use(express.static(__dirname + '/public'));

app.get('/api/profiles', profileCtrl.getFriendsProfiles)


app.listen(port, function(){
  console.log(`Dude, I'm listening on port ${port}`)
})
