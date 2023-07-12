const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3001;
const app = express();

app.route('/opanai', require('./routes/openaiRoutes'));

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})