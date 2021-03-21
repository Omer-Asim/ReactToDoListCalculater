import React from "react";

const CalculaterResult = (props) => {
  return (
    <div id="sonuc" className="alert alert-danger" role="alert">
      {props.sonuc}
    </div>
  );
};

export default CalculaterResult;
