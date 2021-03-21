require("dotenv").config();
const express = require('express');
const app=express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const mysql=require("mysql");
const cors =require("cors");
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose");
const session=require("express-session");


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin:"",
    methods:"",
    credentials:true;
}))
app.use(session({
    secret:"",
    name:"",
    proxy:true,
    saveUninitialized:true,
    resave:true,
}))

const Schema=mongoose.Schema;
mongoose.connect(process.env.BAGLANTI, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})


const UrunSema={
    isim:String,
    soyisim:String,

};

const Urun=mongoose.model("Urun",UrunSema);
