const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const authRoutes = require('./routes/auth');
const patientRoutes = require('./routes/patients');
const { verifyToken } = require('./middleware/auth');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/patients', verifyToken, patientRoutes);

app.get('/', (req, res) => res.send('Hospital API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
