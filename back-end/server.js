const  express = require("express");
const dotenv = require("dotenv").config();;
const mongoose = require("mongoose");
const { Admin } = require("mongodb");
const quicksort = require('./quicksort');
const cors = require('cors');
const Properties = require('./schema/Properties.js')

const app = express();
app.use(express.json());
const port = process.env.PORT || 9000;
const uri = 'mongodb://admin:admin@mongo:27017/Properties?authSource=admin';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



app.use(cors());

app.listen(port, function() {
    console.log(`listening to port ${port}`);
});

app.get('/Properties', (req, res) =>{
    Properties.find().then(result => res.send(result)).catch(err => console.log(err));
});

app.get('/Statistics', (req, res) =>{
    Properties.find().then(
        result => {
            products = quicksort.quicksort(result);
            const returnItems = [];
            returnItems[1] = products.length;
            let value = 0;
            for(let i=0; i<products.length; i++){
            value += parseInt(products[i].Value);
            }


            returnItems[0] = value;
            counter = 0;
            for(let i=0; i<products.length; i++){
            if(products[i]["PetFriendly"] == true){
                counter += 1;
            }}
            
            returnItems[2] = counter;
            res.send(returnItems);
        }
    ).catch(err => console.log(err));
});