import "./App.css";
// import Button from "./components/common/Button";
import Footer from "./components/common/Footer";
import Hero from "./components/common/Hero";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <main className>
        <h1>Bienvenido</h1>
        <p>Este es el contenido principal de tu aplicación</p>
        <Button />
      </main> */}
      <Footer />
    </>
  );
}

export default App;
