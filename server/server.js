const pool = require('../database/PostgreSQLdb.js');
const express = require('express');
const app = express();
const PORT = 3000;


app.listen(PORT, console.log(`Server Listening on ${PORT}`));
