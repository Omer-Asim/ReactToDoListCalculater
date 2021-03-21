import React from "react";

const CalculaterHeader = () => {
  return (
    <React.StrictMode>
      <div className="text-center h3 p-2 m-2 bg-transparent">
        Hesap Makinesi
      </div>
      <div className="shadow font-weight-bold text-center w-100">
        Lütfen Sayıları girdikten sonra butonlara tıklayınız.
        <br /> Aksi halde fonksiyon çalışmaz
      </div>
    </React.StrictMode>
  );
};

export default CalculaterHeader;
