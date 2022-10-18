// Import express package
const express = require(`express`)

// Require the JSON file and assign it to a variable called "termData"
const dbData = require('./db/db.json')
const PORT = 3001;

// Initialize our app variable by setting it to the value of exxpress
const app = express();

app.use (`/`, (req, res) => res.send('Visit httmp://localhost:3001/api'));

// res.json() allows us to return JSON instead of a buffer, string, or static file 
app.use('./db/db.json', (req, res) => res.json(dbData));

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
    );

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use(express.static('public'));

app.get('/', (req,res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

