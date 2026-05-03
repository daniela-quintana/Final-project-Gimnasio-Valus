import "./App.css";
import Footer from "./components/common/Footer";
import Hero from "./components/common/Hero";
import Navbar from "./components/common/Navbar";
import AboutUs from "./components/pages/TeamPage";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
