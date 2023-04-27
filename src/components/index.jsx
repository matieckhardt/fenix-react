import Nav from "./Home/Navbar";
import Carousel from "./Home/Carousel";
import Hero from "./Home/Hero";
import Brands from "./Home/Brands";
import Sucursales from "./Home/Sucursales";
import About from "./Home/About";
import Contact from "./Home/Contact";
import GoogleMaps from "./Home/Map";
import Consultanos from "./Home/Consultanos";
import Footer from "./Home/Footer";
import Embla from "./Embla";

function Home() {
  return (
    <>
      <Nav></Nav>
      <Carousel></Carousel>
      <Hero></Hero>
      <Brands></Brands>
      <Sucursales></Sucursales>
      <About></About>
      <Contact></Contact>
      <GoogleMaps></GoogleMaps>
      <Consultanos></Consultanos>
      <Footer></Footer>
    </>
  );
}
export default Home;
