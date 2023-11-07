import React from "react";
import "../css/Pop.scss";

export default function Pop({ children, error }) {
  return (
    <div id="pop">
    <div id="pop-contenido" className={error ? "error" : "enviado"}>
      <p>{children}</p>
    </div>
    </div>
  );
}
