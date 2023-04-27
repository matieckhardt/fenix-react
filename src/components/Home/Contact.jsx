import React, { useState } from "react";
import transporter from "../../mailer.js";

function Contact() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const mailOptions = {
      from: email,
      to: "info@switchit.com.ar", // replace with your email address
      subject: asunto,
      text: `${nombre} (${email}) says: ${mensaje}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    // Reset form fields
    setNombre("");
    setEmail("");
    setAsunto("");
    setMensaje("");
  };

  return (
    <section id="contactanos" class="bg-secondary">
      <div class="row pl-5 pb-2">
        <div class="col-12 col-lg-6">
          <h3 class="text-light mb-4">CONTACTANOS</h3>
          <form id="form-contacto" onSubmit={handleFormSubmit}>
            <div class="form-group mb-4">
              <input
                type="text"
                class="form-control sombra col-7"
                name="nombre"
                id="nombre"
                placeholder="Nombre y Apellido"
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div class="form-group mb-4">
              <input
                type="email"
                class="form-control sombra"
                name="email"
                id="email"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group mb-4">
              <input
                type="text"
                class="form-control sombra"
                name="asunto"
                id="asunto"
                placeholder="Asunto"
                onChange={(e) => setAsunto(e.target.value)}
              />
            </div>
            <div class="form-group mb-4">
              <textarea
                class="form-control sombra"
                name="mensaje"
                id="mensaje"
                rows="7"
                placeholder="Mensaje"
                onChange={(e) => setMensaje(e.target.value)}
              ></textarea>
              <button
                class="float-right btn btn-light text-primary mt-n1 border-0 font-weight-bolder sombra"
                type="button"
                id="submit"
              >
                ENVIAR
              </button>
            </div>
          </form>
        </div>
        <div class="col-12 col-lg-6 mt-n5">
          <img src="./img/cartero.png" class="mr-n5 mb-n5 cartero" alt="" />
        </div>
      </div>
    </section>
  );
}
export default Contact;
