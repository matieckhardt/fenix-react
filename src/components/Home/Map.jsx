function Map() {
  return (
    <section id="ubicacion" class="px-0 pb-0">
      <h3 class="text-success mx-5">UBICACIÓN</h3>
      <div class="degradado"></div>
      <iframe
        title="gMaps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2256.6033314567394!2d-58.498986502795695!3d-34.58312231736827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb64f789f4935%3A0x1e2bd1256d25cc2a!2sNueva%20Social%20Fenix%20Mosconi!5e0!3m2!1ses-419!2sar!4v1595485717987!5m2!1ses-419!2sar"
        width="100%"
        height="700"
        frameborder="0"
        style={{ border: 0, position: "relative", zIndex: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </section>
  );
}
export default Map;
