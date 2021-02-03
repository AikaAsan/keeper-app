const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();


//creating express server
const app = express();
//port for server will be 5000
const port = process.env.PORT || 5000;


//cors middleware
app.use(cors());
//allows to parse json
app.use(express.json());


//start connecting to db, getting uri from mongodb website, setting environment variable
const uri = "mongodb+srv://Aika:MaratSafin123@cluster0.0uzuh.mongodb.net/NoteKeeper"
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;

//once the connection is open its going to log MongoDb established. Were now connacted to db. Now were able to start putting data into db
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


// require files that are created for crud operations
const notesRouter = require('./routes/notes');



//use files. whenever you go to root url and put /, its going to load everything in notesROuter
app.use('/', notesRouter);


//what starts the server, starts listening on a certain port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});