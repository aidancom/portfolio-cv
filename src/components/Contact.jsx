import React, { useEffect, useState, useRef } from "react";
import Cabecera from "./Cabecera";
import emailjs from "@emailjs/browser";
import "../css/Contact.scss";
import Pop from "./Pop";

const Contact = () => {
  const form = useRef();

  const [valido, setValido] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [numero, setNumero] = useState();
  const [email, setEmail] = useState("");
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [comentarios, setComentarios] = useState("");

  useEffect(() => {
    if ([nombre, apellidos, numero, email].includes("")) {
      setValido(false);
    } else {
      setValido(true);
    }
  }, [nombre, apellidos, numero, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (numero.length < 9) {
      setError(true);
      setInterval(() => {
        setError();
      }, 5000);
    } else {
      setError(false);

      emailjs
        .sendForm(
          "servicio_correo",
          "template_mail",
          form.current,
          "Ip6H-gcWAM0b13mHQ",
        )
        .then(
          (result) => {
            setNombre("");
            setApellidos("");
            setNumero("");
            setEmail("");
            setPais("");
            setProvincia("");
            setComentarios("");
            setEnviado(true);
            setInterval(() => {
              setEnviado();
            }, 5000);
          },
          (error) => {
            console.log("error");
          },
        );
    }
  };

  return (
  

    <div>
      <Cabecera>Contacto</Cabecera>
      <div className="cuerpo">
        <div className="contacto">
          <form ref={form} className="formulario" onSubmit={handleSubmit}>
            {error ? <Pop error={error}>Campos Erroneos</Pop> : ""}
            {enviado ? <Pop>Enviado con exito</Pop> : ""}
            <div className="formulario-campos">
              <div className="formulario-campos-campo">
                <label className="texto">Nombre*</label>
                <input
                  type="text"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                ></input>
              </div>
              <div className="formulario-campos-campo">
                <label className="texto">Apellidos*</label>
                <input
                  type="text"
                  name="apellidos"
                  value={apellidos}
                  onChange={(e) => setApellidos(e.target.value)}
                  required
                ></input>
              </div>
              <div className="formulario-campos-campo">
                <label className="texto">Numero*</label>
                <input
                  type="number"
                  name="numero"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  required
                ></input>
              </div>
            </div>
            <div className="formulario-campos">
              <div className="formulario-campos-campo">
                <label className="texto">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>
              </div>
              <div className="formulario-campos-campo">
                <label className="texto">Pais</label>
                <input
                  type="text"
                  name="pais"
                  value={pais}
                  onChange={(e) => setPais(e.target.value)}
                ></input>
              </div>
              <div className="formulario-campos-campo">
                <label className="texto">Provincia</label>
                <input
                  type="text"
                  name="provincia"
                  value={provincia}
                  onChange={(e) => setProvincia(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="formulario-textarea">
              <p>Tus comentarios</p>
              <textarea
                name="comentarios"
                value={comentarios}
                onChange={(e) => setComentarios(e.target.value)}
              ></textarea>
            </div>
            <div className="boton">
              <input
                id="enviar"
                className={valido ? "valido" : ""}
                type="submit"
                value={valido ? "Enviar" : "Hay campos obligatorios vacios"}
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
