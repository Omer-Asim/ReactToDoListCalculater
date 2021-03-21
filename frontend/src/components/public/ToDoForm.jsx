import React, { useState } from "react";
import Header from "./Header";
import ToDoList from "./ToDoList";

const ToDoForm = () => {
  const [ekle, Setekle] = useState([]);

  function SubmitOldu(event) {
    var yazi = event.target[0].value;

    Setekle(function (oncekiler) {
      return [...oncekiler, yazi];
    });
    event.target[0].value = "";
    event.preventDefault();
  }

  return (
    <React.StrictMode>
      <Header />
      <section>
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <form onSubmit={SubmitOldu} className="form1" id="form1">
              <label for="text">Yapılacakları giriniz</label>
              <input type="text" name="text" />
              <input type="submit" value="EKLE" id="buton" />
              <small
                className="text-center p-2 text-danger shadow-sm "
                id="spanErr"
              ></small>
            </form>
          </div>
          <div className="col-lg-4 col-sm-6 yapilanlar">
            <div className="header">
              <h3 className="text-center">Listem</h3>
            </div>
            {ekle.map(function (gelenVeri, index) {
              return <ToDoList key={index} aciklama={gelenVeri} />;
            })}
          </div>
        </div>
      </section>
    </React.StrictMode>
  );
};

export default ToDoForm;
