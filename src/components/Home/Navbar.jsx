function Nav() {
  return (
    <nav
      class="navbar navbar-expand-lg sticky-top px-4 py-0 mb-3"
      id="nav-fenix"
    >
      <a class="navbar-brand bg-light sombra" href="#carrusel">
        <img src="./img/logo-fenix.png" class="img-fluid" alt="logo fenix" />
      </a>
      <button
        class="navbar-toggler mx-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse flex-column ml-lg-0 px-2 bg-transparent"
        id="navbar"
      >
        <ul class="navbar-nav nav-rrss flex-row pl-2 mb-0 mr-auto">
          <li class="nav-item">
            <a
              class="nav-link py-0 px-1"
              href="https://www.instagram.com/farmacianuevasocial/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-instagram-square text-success fa-2x"></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link py-0 px-1"
              href="https://www.facebook.com/farmacianuevasocial/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-facebook-square text-success fa-2x"></i>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav w-100 nav-fill mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#envios">
              ENVÍOS
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#sucursales">
              SUCURSALES
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#conocenos">
              CONOCENOS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contactanos">
              CONTACTO
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#ubicacion">
              UBICACIÓN
            </a>
          </li>
        </ul>
      </div>
      <div
        class="px-3 pt-5 pb-3 m-0 mt-n5 bg-primary text-center sombra"
        id="nav-etiqueta"
      >
        <a
          href="https://wa.me/+5491154735585/?text=Hola,%20estoy%20interesado%20en%20realizar%20una%20consulta"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa fa-whatsapp fa-3x text-light mt-0"></i>
        </a>
      </div>
    </nav>
  );
}
export default Nav;
