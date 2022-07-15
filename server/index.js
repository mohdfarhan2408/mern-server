const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/users.js');
const cors = require('cors')


app.use(express.json());
app.use(cors());

//Connect to MongoDb using mongoose;
mongoose.connect('mongodb+srv://mohdfarhan2408:khan1998@cluster0.js4xg.mongodb.net/merndb?retryWrites=true&w=majority');

//GET
app.get('/getUsers', (req,res) => {
    UserModel.find({ }, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    });
});

//POST
app.post('/createUsers', async (req,res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save(); // save into db

    res.json(user);
})


app.listen(3000, () => console.log('server on in port 3000'))