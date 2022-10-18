
const express = require(`express`)
const path = require('path')
const notes = require('./routes/api.js')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use('/api', notes);

app.use(express.static(path.join(__dirname, "/public")));

app.get('/', (req,res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req,res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
    );