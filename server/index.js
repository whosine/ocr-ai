const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const collectionRoutes = require('./routes/collectionRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads')); // Serve the uploaded files statically
app.use('/api/collections', collectionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
