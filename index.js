const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3001;
const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})
