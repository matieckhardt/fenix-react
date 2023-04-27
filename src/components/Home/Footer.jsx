function Footer() {
  return (
    <footer>
      <section
        id="footer"
        class="bg-secondary pb-3"
        style={{ position: "relative" }}
      >
        <div class="row p-0">
          <div class="col-4">
            <div class="label label-2 bg-light p-3">
              <img src="./img/logo-fenix.png" class="img-fluid" alt="" />
            </div>
          </div>
          <div class="row d-none d-sm-flex col-8 mt-n5 p-0">
            <div class="col-3">
              <ul class="p-0">
                <li class="nav-item">
                  <a class="nav-link p-1 text-light" href="#productos">
                    <i class="fa fa-square fa-xs pr-1"></i> PRODUCTOS
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-1 text-light" href="#envios">
                    <i class="fa fa-square fa-xs pr-1"></i> ENVÍOS
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-1 text-light" href="#promociones">
                    <i class="fa fa-square fa-xs pr-1"></i>
                    PROMOCIONES
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-1 text-light" href="#covid">
                    <i class="fa fa-square fa-xs pr-1"></i> COVID-19
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-3">
              <ul class="p-0">
                <li class="nav-item">
                  <a class="nav-link p-1 text-light" href="#sucursales">
                    <i class="fa fa-square fa-xs pr-1"></i>
                    SUCURSALES
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-1 text-light" href="#conocenos">
                    <i class="fa fa-square fa-xs pr-1"></i>
                    CONOCENOS
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-1 text-light" href="#contactanos">
                    <i class="fa fa-square fa-xs pr-1"></i>
                    CONTACTO
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-1 text-light" href="#ubicacion">
                    <i class="fa fa-square fa-xs pr-1"></i>
                    UBICACIÓN
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-5 px-0">
              <p class="text-light mb-0">SUCURSALES:</p>
              <p class="text-light font-weight-normal mb-0">
                <span class="font-weight-bold">Mosconi</span> / Gral. José
                Gervasio Artigas 4702
                <br />
                0810-555-0048
              </p>
              <p class="text-light font-weight-normal mb-0">
                <span class="font-weight-bold">Griveo</span> / Gral. José
                Gervasio Artigas 4901
                <br />
                0810-555-0048
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 d-sm-none px-5 mb-5">
          <p class="text-light mb-0">SUCURSALES:</p>
          <p class="text-light font-weight-normal mb-0">
            <span class="font-weight-bold">Mosconi</span> / Gral. José Gervasio
            Artigas 4702
            <br />
            0810-555-0048
          </p>
          <p class="text-light font-weight-normal mb-0">
            <span class="font-weight-bold">Griveo</span> / Gral. José Gervasio
            Artigas 4901
            <br />
            0810-555-0048
          </p>
        </div>
        <div class="px-5">
          <a
            href="https://www.instagram.com/farmacianuevasocial/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-instagram-square text-light fa-2x"></i>
          </a>
          <a
            href="https://www.facebook.com/farmacianuevasocial/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-facebook-square text-light fa-2x"></i>
          </a>
          <p
            class="text-white font-weight-normal d-inline-block pl-1"
            style={{ fontSize: 13, lineHeight: "normal" }}
          >
            SEGUINOS EN
            <br />
            NUESTRAS REDES
          </p>
          <p class="text-light font-weight-normal pr-5">
            © Copyright 2019. Todos los derechos reservados | Profasan sociedad
            anonima, Cuit 30708995904.
            <br /> Dirección fiscal Artigas 4901, CABA
            <a href="#nada" class="float-right mt-auto">
              <img
                src="./img/data-fiscal.jpg"
                alt="data fiscal"
                class="dataf"
              />
            </a>
          </p>
        </div>
        <div class="d-sm-none text-center row">
          <div class="text-center mx-auto" id="mapa-sitio">
            <a
              class="btn bg-transparent"
              data-toggle="collapse"
              href="#sitemap"
              role="button"
              aria-expanded="false"
              aria-controls="sitemap"
            >
              <i class="fas fa-globe pr-2" aria-hidden="true"></i>MAPA DEL SITIO
              <i class="pl-2 fas fa-angle-double-down" aria-hidden="true"></i>
            </a>
            <div class="collapse text-center pt-5" id="sitemap">
              <h3 class="text-white">Sitemap Nueva Social Fenix</h3>
              <ul class="p-0">
                <li class="nav-item btn-lg mb-1 btn-outline-dark border">
                  <a class="nav-link p-1 text-light" href="#productos">
                    {" "}
                    PRODUCTOS
                  </a>
                </li>
                <li class="nav-item btn-lg mb-1 btn-outline-dark border">
                  <a class="nav-link p-1 text-light" href="#envios">
                    {" "}
                    ENVÍOS
                  </a>
                </li>
                <li class="nav-item btn-lg mb-1 btn-outline-dark border">
                  <a class="nav-link p-1 text-light" href="#promociones">
                    PROMOCIONES
                  </a>
                </li>
                <li class="nav-item btn-lg mb-1 btn-outline-dark border">
                  <a class="nav-link p-1 text-light" href="#covid">
                    {" "}
                    COVID-19
                  </a>
                </li>
                <li class="nav-item btn-lg mb-1 btn-outline-dark border">
                  <a class="nav-link p-1 text-light" href="#sucursales">
                    SUCURSALES
                  </a>
                </li>
                <li class="nav-item btn-lg mb-1 btn-outline-dark border">
                  <a class="nav-link p-1 text-light" href="#conocenos">
                    CONOCENOS
                  </a>
                </li>
                <li class="nav-item btn-lg mb-1 btn-outline-dark border">
                  <a class="nav-link p-1 text-light" href="#contactanos">
                    CONTACTO
                  </a>
                </li>
                <li class="nav-item btn-lg mb-1 btn-outline-dark border">
                  <a class="nav-link p-1 text-light" href="#ubicacion">
                    UBICACIÓN
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
export default Footer;
