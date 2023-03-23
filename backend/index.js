const express = require('express')
const cors = require('cors')
require('./db/connection')
const userRouter = require('./routes/user')
const treatmentRouter = require('./routes/treatment')
const authRouter = require('./routes/account')
const session = require('express-session');

const app = express();
app.use(express.json());
app.use(cors({
    origin: "*",
}));

app.use(session({
  loggedin: false,
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(userRouter)
app.use(treatmentRouter)
app.use(authRouter)

app.listen(process.env.DEV_PORT, (error) =>{
  if(!error)
      console.log("Server is Successfully Running, and App is listening on port "+ process.env.DEV_PORT)
  else 
      console.log("Error occured, server can't start", error);
  }
);
