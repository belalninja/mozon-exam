const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

app.use('/', require('./routes/customers.js'));

app.listen(3000, () => console.log('Server is running on port 3000'));
