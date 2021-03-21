require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const passport = require("passport");
const passportLocalMongoose = require("passport-Local-Mongoose");
const session = require("express-session");

const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD, PUT, PATCH, POST, DELETE",
    credentials: true,
  })
);

const Schema = mongoose.Schema;
mongoose.connect(process.env.BAGLANTI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//PASSPORT PAKETİ VE SESSİON PAKETLERİ İÇİN KULLANILMASI GEREKN PAKETLER
app.use(
  session({
    secret: "OmerSifresi",
    resave: true,
    saveUninitalized: true,
    name: "kullanici_bilgileri",
    proxy: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
//PASSPORT PAKETİ VE SESSİON PAKETLERİ İÇİN KULLANILMASI GEREKN PAKETLER

//MONGODB ŞEMALARI -BAŞLANICI
const KullaniciSema = new mongoose.Schema({
  isim: String,
  soyisim: String,
  email: String,
  sifre: String,
});
KullaniciSema.plugin(passportLocalMongoose, {
  usernameField: "email",
  passwordField: "sifre",
});
//MONGODB ŞEMALARI -BAŞLANICI

//MONGODB MODELLERİ
const Kullanici = mongoose.model("Kullanici", KullaniciSema);
passport.use(Kullanici.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  Kullanici.findById(id, function (err, user) {
    done(null, user.id);
  });
});
//MONGODB MODELLERİ

app.get("/", function (req, res) {
  res.send("deneme");
});

app.post("/api/register", function (req, res) {
  Kullanici.register(
    {
      isim: req.body.isim,
      soyisim: req.body.soyisim,
      email: req.body.email,
    },
    req.body.sifre,
    function (err, gelenVeri) {
      if (err) {
        if (err.name === "userExistError") {
          res.send({ sonuc: "email" });
        } else {
          res.send({ sonuc: "hata" });
        }
      } else {
        passport.authenticate("local")(req, res, function () {
          res.send({ sonuc: "başarılı" });
        });
      }
    }
  );
});

app.post("/api/login", function (req, res) {
  var kullanici = new Kullanici({
    email: req.body.email,
    sifre: req.body.sifre,
  });
  req.login(kullanici, function (err) {
    if (err) {
      res.send({ sonuc: "hata" });
    } else {
      passport.authenticate("local")(req, res, function () {
        res.send({ sonuc: "başarılı" });
      });
    }
  });
});

app.get("/api/logout", function (req, res) {
  req.logOut();
  res.send({ sonuc: "başarılı" });
});

app.get("/api/kullanici/giriskontrol", function (req, res) {
  if (req.isAuthenticated()) {
    res.send({ sonuc: true });
  } else {
    res.send({ sonuc: false });
  }
});

app.get("/api/kullanici/bilgilier", function (req, res) {});

app.listen(5000);
