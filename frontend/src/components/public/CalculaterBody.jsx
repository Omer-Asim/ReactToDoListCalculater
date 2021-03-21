import React, { useState } from "react";
import CalculaterResult from "./CalculaterResult";

const CalculaterBody = () => {
  const [sonuc, Setsonuc] = useState([]);
  function Topla(event) {
    event.preventDefault();
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);

    Setsonuc((input1 + input2).toFixed(2));
  }
  function Cikar(event) {
    event.preventDefault();
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);

    Setsonuc((input1 - input2).toFixed(2));
  }
  function Carp(event) {
    event.preventDefault();
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);

    Setsonuc((input1 * input2).toFixed(2));
  }
  function Bol(event) {
    event.preventDefault();
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    Setsonuc((input1 / input2).toFixed(2));
  }
  return (
    <React.StrictMode>
      <form className="hesap-makinesi">
        <input type="text" name="input1" id="input1" autocomplete="off" />
        <input type="text" name="input2" id="input2" autocomplete="off" />
        <input onClick={Topla} type="button" value="Topla(+)" id="topla" />
        <input onClick={Cikar} type="button" value="Çıkart (-)" id="cikar" />
        <input onClick={Carp} type="button" value="Çarp (*)" id="carp" />
        <input onClick={Bol} type="button" value="Böl (/)" id="böl" />
        <CalculaterResult sonuc={sonuc} />
      </form>
    </React.StrictMode>
  );
};

export default CalculaterBody;
