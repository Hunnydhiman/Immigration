import "./scss/index.scss"
import Header from "./components/Header";
import Banner from "./components/Banner";
import Services from "./components/Services";
import About from "./components/About";
import Country from "./components/Country";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <Country />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
