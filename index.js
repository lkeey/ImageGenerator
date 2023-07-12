const { dir } = require('console');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3001;
const path = require('path')
const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Add url router
app.use('/openai', require('./routes/openaiRoutes'));

// begin work
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})
