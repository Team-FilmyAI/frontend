import { useRef } from "react";
import "../../styles/LandingPage/LandingPage.css";
import LandingPageNavBar from "./NavBar";
import Hero from "./Hero";
import Chat from "./Chat";
import About from "./About";
import Demo from "./Demo";
import Blog from "./Blog";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <>
      <LandingPageNavBar />
      <main>
        <div className="main">
          <div className="main-container">
            <section id="hero"><Hero /></section>
            <section id="about"><About /></section>
            <section id="demo"><Demo /></section>
            <section id="blog"><Blog /></section>
          </div>
          <Chat />
        </div>
        <Footer />
      </main>
    </>
  );
}
