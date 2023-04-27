function Hero() {
  return (
    <section id="envios" class="bg-farma">
      <div>
        <div class="label label-2 d-inline-block bg-light">
          <h2 class="font-weight-bolder mt-2">ENVÍOS A DOMICILIO</h2>
        </div>
        <div class="label label-sm d-inline-block label-right bg-light">
          <h3 class="text-success mb-0 font-weight-bolder">HORARIO</h3>
          <h5 class="text-success font-weight-bolder">DE ENTREGA</h5>
          <h3>9-20 hs</h3>
        </div>
      </div>
      <div class="row w-100">
        <div class="col-12 col-lg-7 px-5 pt-0">
          <p
            class="text-light font-weight-normal"
            id="ofrecemos"
            style={{ maxWidth: "600px" }}
          >
            Ofrecemos un servicio de envío a domicilio a todo el barrio de Villa
            Pueyrredón y Villa Urquiza desde cualquiera de nuestras dos
            sucursales sin costo alguno. El horario de recepción de pedidos es
            de 9 a 20 hs.
          </p>
          <h3 class="btn btn-lg btn-dark rounded-pill btn-envios p-2 pr-3">
            <a href="tel:08105550048" class="text-white">
              <i class="fa fa-headset fa-round mr-2"></i>
              0810-555-0048
            </a>
          </h3>
          <br />
          <h3 class="btn btn-lg btn-dark rounded-pill pl-0 btn-envios">
            <a
              href="https://wa.me/+5491154735585/?text=Hola,%20estoy%20interesado%20en%20realizar%20una%20consulta"
              target="_blank"
              class="text-white"
              rel="noreferrer"
            >
              <i class="fa fa-whatsapp fa-round border-0 fa-2x"></i>
              +54 911 5473-5585
            </a>
          </h3>
          <br />
          <h3 class="btn btn-lg btn-dark rounded-pill p-2 btn-envios">
            <i class="fa fa-envelope fa-round"></i>
            <a
              href="mailto:pedidos@nuevasolcialfenix.com.ar"
              class="text-white px-2"
            >
              pedidos@nuevasocialfenix.com.ar
            </a>
          </h3>
        </div>
        <div class="d-none d-lg-block col-lg-5 p-0 px-1">
          <img src="./img/delivery.png" class="img-fluid img-delivery" alt="" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
