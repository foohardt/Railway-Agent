'use strict';

const mongoose = require('mongoose');
const dbName = 'project-three';
const mongoUri = process.env.MONGODB_URI || `mongodb://localhost/${dbName}`;

// connect to the database
mongoose.connect("mongodb://localhost/project-three");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`Connected to the database (${mongoUri})`);
});
