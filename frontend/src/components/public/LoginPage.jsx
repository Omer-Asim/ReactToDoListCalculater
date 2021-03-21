import React, { useState } from "react";
import LoginResult from "./LoginResult";

const LoginPage = () => {
  const [giris, SetGiris] = useState(0);
  /*
  0:ilk durum
  1:giriiş yapıldı
  2:hata var
  3:yükleniyor
  */
  function Giris(event) {
    SetGiris(0);
    var KullanıcıBilgileri = [
      { email: "omer@omer.com", sifre: "omer1234.?" },
      { email: "asim@omer.com", sifre: "1234" },
    ];
    event.preventDefault();

    var email = event.target.email.value;
    var password = event.target.sifre.value;
    KullanıcıBilgileri.forEach((element) => {
      if (email === element.email && password === element.sifre) {
        SetGiris(1);
        window.location.href = "/Calculater";
      } else {
        SetGiris(2);
      }
    });
  }

  return (
    <React.StrictMode>
      <form onSubmit={Giris} className="formKayit" id="form">
        <div className="form-group">
          <header className="text-center h3 ">
            KULLANICI GİRİŞ KONTROLÜ JS
          </header>
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            autocomplete="off"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="sifre"
            autocomplete="off"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />{" "}
          >
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className={`btn btn-primary btn-block`}>
          {giris === 3 ? (
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "Giriş Yap"
          )}
        </button>
      </form>
      <LoginResult
        className={` w-25 p-2 ${giris === 2 && "alert alert-danger"}`}
        aciklama={
          giris === 1
            ? "Giriş başarılı, lütfen bekleyin.."
            : giris === 2 && "Email ya da şifre hatalı."
        }
      />
    </React.StrictMode>
  );
};

export default LoginPage;
