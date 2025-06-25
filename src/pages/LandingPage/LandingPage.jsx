import "./LandingPage.css";
import LandingPageNavBar from "./NavBar";
import Hero from "./Hero";
import Chat from "./Chat";
import About from "./About";
import Demo from "./Demo";
import Blog from "./Blog";
import Footer from "./Footer";
import Header from "../../components/Header/Header";

export default function LandingPage() {
  return (
    <>
      <LandingPageNavBar />
      <main>
        <div className="main">
          <div className="main-container">
            <Hero />
            <Header />
            <About />
            <Demo />
            <Blog />
          </div>
          <Chat />
        </div>
        <Footer />
      </main>
    </>
  );
}
