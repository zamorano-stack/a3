
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/products', productRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
