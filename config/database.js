const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { 
    useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true 
});

const db = mongoose.connection;

db.once('connected', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});