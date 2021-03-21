import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const RegisterPage = () => {
  const [kayit, Setstate] = useState({
    durum: 0,
    sonuc: 0,
  });

  /*
  durum :0 --ilk hail
  durum :1 -- yükleniyor

  sonuc :0 ---ilk hali
  sonuc:1---başarılı
  sonuc:2 --- email kullanılıyor
  sonuc :3 --- şifreler aynı değil
  sonuc:4 ---- hata

  */

  function uyeOl(event) {
    var isim = event.target.isim.value;
    var soyisim = event.target.Soyad.value;
    var email = event.target.email.value;
    var sifre = event.target.sifre.value;
    var reSifre = event.target.reSifre.value;

    if (sifre !== reSifre) {
      Setstate((oncekiler) => ({ ...oncekiler, sonuc: 3 }));
    } else {
      Setstate((oncekiler) => ({ ...oncekiler, durum: 1 }));
      axios
        .post("http://localhost:5000/api/register", {
          isim: isim,
          soyisim: soyisim,
          email: email,
          sifre: sifre,
        })
        .then(function (gelenVeri) {
          if (gelenVeri.data.sonuc === "başarılı") {
            Setstate((oncekiler) => ({ durum: 1, sonuc: 1 }));
            window.location.href = "/";
          } else if (gelenVeri.data.sonuc === "email") {
            Setstate((oncekiler) => ({ durum: 0, sonuc: 2 }));
          } else {
            Setstate((oncekiler) => ({ durum: 0, sonuc: 4 }));
          }
        });
    }

    event.preventDefault();
  }
  return (
    <React.StrictMode>
      <Header />
      <section>
        <header className="text-center h3"> KULLANICI Kayıt formu JS</header>
        <form onSubmit={uyeOl} id="formKayit" className="formKayit shadow ">
          <label for="isim">Ad</label>
          <input
            required
            type="text"
            name="isim"
            id="isim"
            placeholder="isim "
            autocomplete="off"
          />
          <span id="isimHata" className="text-danger h5 ml-2"></span>
          <label for="Soyad">Soyad</label>
          <input
            type="text"
            name="Soyad"
            id="Soyad"
            placeholder="Soyisim"
            autocomplete="off"
            required
          />
          <span id="Soyad" className="text-danger h5 ml-2"></span>
          <label for="eposta">Email Adresi</label>
          <input
            type="email"
            name="email"
            className={`form-control${kayit.sonuc === 2 && "is-invalid"}`}
            id="eposta"
            placeholder="Email Adresi"
            autocomplete="off"
            required
          />
          <label for="sifre">Şifre</label>
          <input
            className={`form-control ${kayit.sonuc === 3 && "is-invalid"}`}
            type="password"
            name="sifre"
            id="sifre"
            placeholder="En az 6 karakter"
            autocomplete="off"
            required
          />
          <span id="postaHata" className="text-danger h5 ml-2">
            {kayit.sonuc === 3 && "şifreler aynı değil"}
          </span>
          <label for="sifre2">Şifre Tekrar</label>
          <input
            type="password"
            className={`form-control ${kayit.sonuc === 3 && "is-invalid"}`}
            name="reSifre"
            id="sifre2"
            placeholder="En az 6 karakter"
            autocomplete="off"
            required
          />

          <input type="submit" value="Kayıt Ol" id="kayıtol" />
        </form>
        <hr />
        <p className="text-center">
          Zaten üyemisin ?{" "}
          <Link to="/" className="nav-link">
            Giriş Yap
          </Link>
        </p>
      </section>
    </React.StrictMode>
  );
};

export default RegisterPage;
