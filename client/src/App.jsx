import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Hero from "./components/common/Hero";
import AboutUsPage from "./components/pages/AboutUsPage";
import PlansPage from "./components/pages/PlansPage";
import ReviewsPage from "./components/pages/ReviewsPage";
import TeamPage from "./components/pages/TeamPage";
import ShopPage from "./components/pages/ShopPage";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import "./App.css";

const Home = () => (
  <>
    <Hero />
    <section id="about"><AboutUsPage /></section>
    <section id="reviews"><ReviewsPage /></section>
    <section id="plans"><PlansPage /></section>
    <section id="store"><ShopPage /></section>
    <section id="team"><TeamPage /></section>
  </>
);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;