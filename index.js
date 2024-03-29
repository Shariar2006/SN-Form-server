const express = require('express');
const cors = require('cors');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');


//middleware
app.use(express.json());
app.use(cors());


const mongoAtlasUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sn-form.8rvhs9z.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.DB_DB}`;


// Connect to the MongoDB cluster
mongoose.connect(
    mongoAtlasUri)
    .then(() => console.log("connecting to mongoose"))
    .catch(err => console.log(err))

app.listen(port, () => {
    console.log(`server is running on port:${port}`)
})