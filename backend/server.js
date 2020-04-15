const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt= require('jsonwebtoken')

const app = express();
const PORT = 4000;
const userRoutes = express.Router();


let Buyer = require('./models/buyer');
let Seller = require('./models/seller');
//let Products = require('./models/products');
//let Bookings = require('./models/bookings');
//let Reviews = require('./models/reviews');

app.use(cors());
app.use(bodyParser.json());

// Connection to mongodb
mongoose.connect('mongodb+srv://rahul0805:rahul0805@bioproj-jbih7.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
// mongoose.connect('mongodb://127.0.0.1:27017/products', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established succesfully.");
})

// API endpoints

// Getting all the users
userRoutes.route('/').get(function (req, res) {
    Seller.find(function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

// Adding a new user
userRoutes.route('/add').post(function (req, res) {

    let send={
        status:"-1",
        msg:"temp"
    };

    //let user = new User(req.body);

    const { username, password,confirm_password, user_type ,shopname,email,phone,address,pincode} = req.body;
    if (!username || !password || !confirm_password|| !user_type || !email || !phone || !address || !pincode) {
        send.msg="Incomplete fields";
        send.status="2";
        res.json(send)
    }
        if(user_type=='Seller' && !shopname){
             send.msg="Incomplete fields";
        send.status="2";
        res.json(send)

        }
        else if(password!=confirm_password){
        send.msg = "Password didn't match";
        send.status=1;
        res.json(send)
    }

    else if (user_type=='Buyer'){
    Buyer.findOne({ username })
        .then(user => {
            if (user) {
                send.msg="Username exists already";
                send.status="3";
                res.json(send)
            }

            const newuser = new Buyer({
               username,
                password,
                email,
                phone,
                address,
                pincode,
                sum_ratings: 0, //default 3
                num_ratings: 0
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newuser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newuser.password = hash;
                    newuser.save()

                    send.msg="Successfully Added";
                    send.status="0";
                    res.json(send)
                    
                })      
            })
        })
    }

    else if (user_type=='Seller'){
    Seller.findOne({ username })
        .then(user => {
            if (user) {
                send.msg="Username exists already";
                send.status="3";
                res.json(send)
            }

            const newuser = new Seller({
               username,
                password,
                shopname,
                email,
                phone,
                address,
                pincode,
                sum_ratings: 0, //default 3
                num_ratings: 0
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newuser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newuser.password = hash;
                    newuser.save()

                    send.msg="Successfully Added";
                    send.status="0";
                    res.json(send)
                    
                })      
            })
        })
    }

});

// Login an existing user
userRoutes.route('/login').post(function (req, res) {

    let send={
        status:"-1",
        msg:"temp",
        type:""
    };

    let Username = req.body.username;
    let Password = req.body.password;

    User.findOne({ username: Username })
        .then(user => {
            if (!user) {
                send.msg="User does not exist";
                send.status="2";
                res.json(send)
            }

            bcrypt.compare(Password, user.password)
                .then(isMatch => {
                    if (!isMatch) {
                        send.msg="Wrong password";
                        send.status="3";
                        res.json(send)
                    }

                    else{
                        send.msg="Credentials Valid";
                        send.status="0";
                        send.type=user.user_type
                        res.json(send)
                    }
                })
        })

});



app.use('/', userRoutes);

app.listen(PORT, function () {
    console.log("Server is running on port: " + PORT);
});
