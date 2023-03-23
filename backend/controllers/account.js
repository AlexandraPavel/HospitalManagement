const authModel = require("../models/account.js");
const connection = require('../db/connection');
const session = require("express-session");

const authentificateAccount = async (req, res) => {
	let username = req.body.username;
	let password = req.body.password;
    console.log(username, password);

	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE email = ? AND password = ?',
            [username, password],
            function(error, results, fields) {
            
			if (error)
                throw error;
			console.log("Result", results)
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
                console.log(req.session)
                const mess = {"body": "Authentificated"}
				res.status(200).send(mess);
			} else {
                const mess = {"body": "Incorrect Username or Password!"}
				res.status(500).send(mess);
			}			
			res.end();
		});
	} else {
        const mess = {"body": "Please enter Username and Password!"}
		res.status(500).send(mess);
		res.end();
	}
};

const getHome = async (req, res) => {
    console.log(req.session)
	if (req.session.loggedin) {
        console.log('Welcome back, ' + req.session.username + '!')
		const mess = {"body": 'Welcome back, ' + req.session.username + '!'};
        res.status(200).send(mess);
	} else {
        const mess = {"body": "Please login to view this page!"}
		res.status(500).send(mess);
	}
	res.end();
};

module.exports = {
    authentificateAccount,
    getHome
};