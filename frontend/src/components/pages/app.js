//Selector
const textInput = document.getElementById("text1");
const buton = document.getElementById("buton");
const toDoList = document.getElementById("toDoList");
const iTrash = document.querySelector(".iTrash");
const liDeneme = document.getElementsByClassName(".lideneme");

//event Listener

// buton.addEventListener("click", addTodo);

// Function

function addTodo(event) {
  var elErr = document.getElementById("hataKutusu");
  var Tarih = new Date().toLocaleDateString();
  var spanErr = document.getElementById("spanErr");

  if (textInput.value !== "") {
    event.preventDefault();

    const newLı = document.createElement("li");
    newLı.classList.add("lideneme");
    var iTrash = document.createElement("i");

    iTrash.classList.add("fas", "fa-trash", "p-2", "iTrash");
    iTrash.addEventListener("click", kaldır);

    const iCheck = document.createElement("i");

    iCheck.classList.add("fas", "fa-check", "p-2", "iCheck");
    iCheck.addEventListener("click", check);

    newLı.innerHTML = textInput.value + "   Tarih :" + Tarih;
    toDoList.appendChild(newLı);
    textInput.value = "";
    spanErr.classList.remove("animation-deneme");
    spanErr.innerText = "";
    //elErr.innerHTML = "";
    newLı.appendChild(iTrash);
    newLı.appendChild(iCheck);
  } else {
    spanErr.classList.add("animation-deneme");
    spanErr.innerText = "Lütfen boş bırakmayınız!";
    // if (elErr == null) {
    //   elErr = document.createElement("div");
    //   elErr.setAttribute("id", "hataKutusu");
    //   elErr.classList.add("jumbotron", "h1", "w-50", "text-center");
    // }
    // elErr.innerHTML = "Lütfen boş bırakmayınız";
    // document.body.appendChild(elErr);
  }
}

function check(e) {
  console.log(e.target.parentElement);
  // e.target.parentElement.style.textDecoration = "line-through";
  e.target.parentElement.classList.toggle("altiniciz");
  e.target.classList.toggle("text-info");

  //UNDİFEND GELİYOR TEXTDECORATİON
  // liDeneme.classList.add("text-danger");
}

function kaldır(e) {
  e.preventDefault();
  e.target.parentElement.remove();
}

//HESAP MAKİNESİ DEFİNATİON
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

const topla = document.getElementById("topla");
const cikar = document.getElementById("cikar");
const carp = document.getElementById("carp");
const böl = document.getElementById("böl");
var sonuc = document.getElementById("sonuc");

//Hesap Makinesi Fonksiyonu

topla.addEventListener("click", Toplama);
function Toplama() {
  if (!input1.value == "" && !input2.value == "") {
    var kutu1 = parseInt(input1.value);
    var kutu2 = parseInt(input2.value);
    var toplam = kutu1 + kutu2;
    sonuc.classList.remove("d-none");
    sonuc.innerText = "Sonuc :" + toplam.toFixed(2);
    input1.value = "";
    input2.value = "";
  } else {
    sonuc.classList.remove("d-none");
    sonuc.innerText = "Lütfen boş geçmeyiniz";
    input1.value = "";
    input2.value = "";
  }
}

cikar.addEventListener("click", Cikar);
function Cikar() {
  if (!input1.value == "" && !input2.value == "") {
    var kutu1 = parseInt(input1.value);
    var kutu2 = parseInt(input2.value);
    var toplam = kutu1 - kutu2;
    sonuc.classList.remove("d-none");
    sonuc.innerText = "Sonuc :" + toplam.toFixed(2);
    input1.value = "";
    input2.value = "";
  } else {
    sonuc.classList.remove("d-none");
    sonuc.innerText = "Lütfen boş geçmeyiniz";
    input1.value = "";
    input2.value = "";
  }
}

carp.addEventListener("click", Carp);
function Carp() {
  if (!input1.value == "" && !input2.value == "") {
    var kutu1 = parseInt(input1.value);
    var kutu2 = parseInt(input2.value);
    var toplam = kutu1 * kutu2;
    sonuc.classList.remove("d-none");
    sonuc.innerText = "Sonuc :" + toplam.toFixed(2);

    input1.value = "";
    input2.value = "";
  } else {
    sonuc.classList.remove("d-none");
    sonuc.innerText = "Lütfen boş geçmeyiniz";
    input1.value = "";
    input2.value = "";
  }
}

böl.addEventListener("click", Bolme);
function Bolme() {
  if (!input1.value == "" && !input2.value == "") {
    var kutu1 = parseInt(input1.value);
    var kutu2 = parseInt(input2.value);
    var toplam = kutu1 / kutu2;
    sonuc.classList.remove("d-none");
    sonuc.innerText = "Sonuc :" + toplam.toFixed(2);
    input1.value = "";
    input2.value = "";
  } else {
    sonuc.classList.remove("d-none");
    sonuc.innerText = "Lütfen boş geçmeyiniz";
    input1.value = "";
    input2.value = "";
  }
}
//Hesap Makinesi Fonksiyonu Bitişi

//GİRİŞ İŞLEMLERİ
var KullanıcıBilgileri = [{ email: "omer@omer.com", sifre: "omer1234.?" }];

var girisYap = document.getElementById("girisYap");
var form = document.getElementById("form");
var KullaniciSonucu = document.getElementById("KullaniciSonucu");

form.addEventListener("submit", function (event) {
  var eposta = document.getElementById("email").value;
  var password = document.getElementById("sifre").value;

  if (
    eposta == KullanıcıBilgileri[0].email &&
    password == KullanıcıBilgileri[0].sifre
  ) {
    KullaniciSonucu.innerHTML = "Gİriş Başarılı...";
    window.location.href = "https://www.google.com.tr";
    event.preventDefault();

    // window.location.href = "http://www.google.com";
  } else if (
    eposta == KullanıcıBilgileri[0].email ||
    !password == KullanıcıBilgileri[0].sifre
  ) {
    alert("şifre yanlış");
  } else if (
    !eposta == KullanıcıBilgileri[0].email ||
    password == KullanıcıBilgileri[0].sifre
  ) {
    alert("eposta yanlış");
  }
  // } else if (password.length < 6) {
  //   alert("en az 6 karakter olmalı şifre");
  // }
  else {
    alert("HATALI KULLANCI ADI");
  }
});
//GİRİŞ İŞLEMLERİ BİTİŞİ

//Kayıt İşlemleri Başlangıcı
var isim = document.getElementById("isim");
var eposta = document.getElementById("eposta");
var sifre1 = document.getElementById("sifre1");
var sifre2 = document.getElementById("sifre2");
var isimHata = document.getElementById("isimHata");
var postaHata = document.getElementById("postaHata");
var formKayit = document.getElementById("formKayit");

formKayit.addEventListener("submit", KayitOl);

function KayitOl(event) {
  var isim = document.getElementById("isimSoyisim").value;
  var eposta = document.getElementById("eposta").value;
  var sifre1 = document.getElementById("sifre1").value;
  var sifre2 = document.getElementById("sifre2").value;

  if (isim == "") {
    isimHata.innerHTML = "! Adınızı girin";
    event.preventDefault();
  } else if (eposta == "") {
    postaHata.innerHTML = "! eposta girin";
    event.preventDefault();
  } else if (sifre1.length < 6 || sifre2.length < 6) {
    alert("Şifreniz en az 6 basamaklı olmalıdır");
  } else if (sifre1 !== sifre2) {
    alert("şifreleriniz eşleşmedi");
  }
}
//DARK MODE-LIGHT MODE

var bodyElementi = document.body;
var buttonElementi = document.getElementById("toggle");

buttonElementi.addEventListener("click", DarkMode);

function DarkMode() {
  bodyElementi.classList.toggle("bg-dark");
  bodyElementi.classList.toggle("text-white");
  buttonElementi.classList.toggle("btn-dark");

  if (bodyElementi.classList.contains("bg-dark")) {
    buttonElementi.innerHTML = "<i class='far fa-moon '></i>";
  } else {
    buttonElementi.innerHTML = "<i class='far fa-sun '></i>";
  }
}

//Kayıt İşlemleri Bitişi

//console.log(deneme);

// var bosArray = [];

// var button = document.getElementById("buton");
// var ol = document.getElementById("olItem");

// function ekle() {
//   var text = document.getElementById("text").value;
//   var ekle = document.createTextNode(text);

//   if (text !== "") {
//     var liElementi = document.createElement("li");
//     document.getElementById("olItem").appendChild(liElementi);

//     bosArray.push(ekle);
//     console.log(bosArray);

//     return clear();
//   }
// }

// function clear() {
//   text.value = "";
// }

// function Ekle() {
//   var yazi = document.getElementById("text").value;
//   bosArray.push(yazi);
// }

// function Yazdir() {
//   var olItem = document.getElementById("olItem");
//   olItem.innerText = "";
//   for (var i = 0; i < bosArray.length; i++) {
//     var liItem = document.createElement("li");
//     var listItem = liItem.appendChild(document.createTextNode(bosArray[i]));
//     olItem.appendChild(listItem);
//   }
// }
// document.getElementById("buton", function () {
//   Ekle();
//   Yazdir();
// });

// console.log(Yazdir());

// var theList = [];

// function todoList() {
//   var item = document.getElementById("todoInput").value;
//   var text = document.createTextNode(item);
//   var checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
//   checkbox.name = "name";
//   checkbox.value = "value";
//   var newItem = document.createElement("li");

//   newItem.appendChild(checkbox);
//   newItem.appendChild(text);
//   document.getElementById("todoList").appendChild(newItem);

//   theList.push(item); // This adds the item to theList[]
//   //localStorage.setItem("todoList", JSON.stringify(theList)); // Set localStorage object
//   //var storedTodoList = JSON.parse(localStorage.getItem("todoList")); // Get localStorage object

//   console.log(theList);

//   return clear();
// }

// function clear() {
//   todoInput.value = "";
// }
