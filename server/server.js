const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

// Express middleware
app.use(express.json());

// CORS
app.use(cors());

// .ENV
dotenv.config();

// MongoDB connection
mongoose
	.connect(process.env.MONGOURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.log(err));

// Routes
app.use('/company', require('./routes/company'));
app.use('/auth', require('./routes/auth'));
app.use('/group', require('./routes/group'));

// Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
