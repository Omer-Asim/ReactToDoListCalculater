import React from "react";

const LoginResult = (props) => {
  return (
    <div>
      <div
        style={{ margin: "10px auto" }}
        className={props.className}
        id="KullaniciSonucu"
      >
        {props.aciklama}
      </div>
    </div>
  );
};

export default LoginResult;
