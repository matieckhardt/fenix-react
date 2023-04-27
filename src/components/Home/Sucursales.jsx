function Sucursales() {
  return (
    <section id="sucursales" class="bg-farma">
      <div>
        <div class="label label-2 bg-light pt-5">
          <h2 class="font-weight-bolder">SUCURSALES</h2>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <a href="#sucursal" class="sucursal">
              <img
                src="./img/suc-mosconi.png"
                class="img-fluid sombra-2"
                alt=""
              />
              <div class="card-sucursal">
                <h1 class="text-light">Mosconi</h1>
                <h3 class="text-light">Av. J. Artigas 4702, CABA</h3>
                <h4
                  class="border-white pt-2 font-weight-light text-light horarios"
                  style={{ borderTop: "3px solid white" }}
                >
                  Lunes a Viernes de 8 a 21 hs.
                </h4>
                <h4 class="font-weight-light text-light horarios">
                  Sábados de 9 a 21 hs.
                </h4>
              </div>
            </a>
            <a
              href="https://goo.gl/maps/PQEUZ6gQ3uwG6MGg7"
              class="text-light font-weight-normal d-block m-5"
            >
              <i class="fa fa-map-marker-alt fa-2x"> </i>
              <span class="h4 text-light pl-2">
                <u>Ver Mapa</u>
              </span>
            </a>
          </div>
          <div class="col-sm-12 col-md-6">
            <a href="#sucursal" class="sucursal">
              <img
                src="./img/suc-griveo.png"
                class="img-fluid sombra-2"
                alt=""
              />
              <div class="card-sucursal">
                <h1 class="text-light">Griveo</h1>
                <h3 class="text-light">Av. J. Artigas 4901, CABA</h3>
                <h4
                  class="border-white pt-2 font-weight-light text-light horarios"
                  style={{ borderTop: "3px solid white" }}
                >
                  Lunes a Viernes de 8:30 a 20 hs.
                </h4>
                <h4 class="font-weight-light text-light horarios">
                  Sábados de 9 a 14 hs y de 16 a 20hs.
                </h4>
              </div>
            </a>
            <a
              href="https://goo.gl/maps/4YTtEnQLKko27tVA6"
              class="text-light font-weight-normal d-block m-5"
            >
              <i class="fa fa-map-marker-alt fa-2x"> </i>
              <span class="h4 text-light pl-2">
                <u>Ver Mapa</u>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Sucursales;
