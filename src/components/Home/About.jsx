function About() {
  return (
    <section id="conocenos">
      <div class="row w-100 px-5">
        <img src="./img/linea.png" alt="" class="mb-5 mx-auto w-100 px-3" />
        <div class="col-12 col-lg-6">
          <h1 class="text-success mb-5">CONOCENOS</h1>
          <div class="px-3" style={{ borderLeft: "solid 3px #000" }}>
            <h3 class="text-success">
              <i class="fas fa-square fa-xs"></i> Quiénes somos
            </h3>
            <p class="font-weight-normal text-justify my-2">
              El <b>4 de marzo de 1995</b> nace la cadena de Farmacias Nueva
              Social Fenix, con la adquisición de la primera sucursal ubicada en
              la Av. José G. de Artigas 4702 en el barrio de Villa Pueyrredón.
              Ya para ese entonces dicha farmacia llevaba el nombre de Social
              Fenix y contaba con una <b>clientela leal</b> que depositaba en
              ella la <b>confianza en la dispensa de medicamentos.</b> Esta a su
              vez ya era reconocida en el barrio por aquellos Profesionales de
              la Salud quienes confiaban en el servicio que brindaba esta
              farmacia y la importante labor que la misma desarrollaba con sus
              pacientes.
            </p>
            <p class="font-weight-normal text-justify">
              Al pasar los meses la farmacia empezó a crecer y de ahí la
              necesidad de expandirse a otros puntos estratégicos de Villa
              Pueyrredón y el <b>25 de Septiembre de 1996</b> se inaugura la
              sucursal Nueva Social Fenix Griveo cita en la Av. José G. de
              Artigas 4901, para dar inicio a lo que hoy se conoce como la
              principal cadena de Farmacias de Villa Pueyrredón
            </p>
          </div>
        </div>
        <div class="col-12 offset-1 col-lg-5">
          <img
            src="./img/fenix.png"
            class="mb-4 img-fluid"
            alt="logo nueva social fenix"
          />
          <div class="px-3 my-4" style={{ borderLeft: "solid 3px #000" }}>
            <h3 class="text-success">
              <i class="fas fa-square fa-xs"></i> Visión
            </h3>
            <p class="font-weight-normal text-justify">
              Ser identificados como la farmacia líder en Villa Pueyrredón,
              marcando la diferencia en la atención de nuestros clientes y
              asegurando la mayor diversidad de productos farmacéuticos y de
              perfumería.
            </p>
          </div>
          <div class="px-3" style={{ borderLeft: "solid 3px #000" }}>
            <h3 class="text-success">
              <i class="fas fa-square fa-xs"></i> Misión
            </h3>
            <p class="font-weight-normal text-justify">
              Contribuir al bienestar de nuestros clientes dispensando productos
              farmacéuticos confiables, através de un amplio servicio que supere
              sus expectativas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
