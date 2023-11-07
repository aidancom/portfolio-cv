import React from "react";
import "../css/Pop.scss";

export default function Pop({ children, error }) {
  return (
    <div className={error ? "error" : "enviado"}>
      <p>{children}</p>
    </div>
  );
}
