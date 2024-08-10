import React from "react";
import { useLocation } from "react-router-dom";
import "./DrugDetail.css";

const DrugDetail = () => {
  const location = useLocation();
  const { drug } = location.state || {};

  if (!drug) {
    return <div>No drug selected.</div>;
  }

  return (
    <div className="container">
      <div className="details">
        <h2>{drug.name}</h2>
        <p>
          <strong style={{color:'rgb(142, 223, 204)'}}>RxCUI:</strong> {drug.rxcui}
        </p>
        <p>
          <strong style={{color:'rgb(142, 223, 204)'}}>Synonym:</strong> {drug.synonym}
        </p>
        <p>
          <strong style={{color:'rgb(142, 223, 204)'}}>TTY:</strong> {drug.tty}
        </p>
      </div>
    </div>
  );
};

export default DrugDetail;
