//To verify DataBase connection 
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
	MongoClient.connect('mongodb+srv://abhitabhkumar9718:Abhitabh123@cluster0.28rrqtl.mongodb.net/', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
		.then((client) => {
			if (client) console.log("Connected to DB");
			_db = client.db();
			cb();
		})
		.catch((err) => {
			console.log(err);
			throw err;
		});
};

const getDb = () => {
	if (_db) return _db;
	throw "DB not Connected";
};

module.exports = { mongoConnect, getDb };
