const express = require('express');
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 4041;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/', require('./routes/books'))

app.listen(port, ()=>{
    console.log(`Server is live and running on port ${port}`)
});