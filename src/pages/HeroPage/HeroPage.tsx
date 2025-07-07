import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./HeroPage.css";
import HeroPageNavBar from "./HeroPageNavBar";

interface BlogPost {
  title: string;
  image: string;
}

export default function HeroPage() {
  const typedRef = useRef<HTMLSpanElement | null>(null);
  const aboutSubtitleRef = useRef<HTMLParagraphElement | null>(null);
  const aboutDescriptionRef = useRef<HTMLParagraphElement | null>(null);
  const demoSubtitleRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const blogSubtitleRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const chatRef = useRef<HTMLDivElement | null>(null);
  const chatCloseRef = useRef<HTMLElement | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const typedStrings = [
      "Actors and Artists",
      "Producers and Directors",
      "Screenwriters and Technicians",
    ];

    const typed = new Typed(typedRef.current!, {
      strings: typedStrings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    if (!aboutSubtitleRef.current || !aboutDescriptionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting && !target.dataset.animated) {
          target.dataset.animated = "true";
          target.classList.add("slide-up");

          aboutSubtitleRef.current?.addEventListener(
            "transitionend",
            () => {
              aboutDescriptionRef.current?.classList.add("fade-in");
            },
            { once: true }
          );

          observer.unobserve(target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(aboutSubtitleRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!demoSubtitleRefs.current.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting && !target.dataset.animated) {
            target.dataset.animated = "true";
            target.classList.add("slide-in-right");
            obs.unobserve(target);
          }
        });
      },
      { threshold: 0.1 }
    );

    demoSubtitleRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!blogSubtitleRefs.current.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting && !target.dataset.animated) {
            target.dataset.animated = "true";
            target.classList.add("slide-in-left");
            obs.unobserve(target);
          }
        });
      },
      { threshold: 0.1 }
    );

    blogSubtitleRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const blogPosts: BlogPost[] = [
    { title: "Blog Title", image: "images/landingPage/lens.png" },
    { title: "Blog Title", image: "images/landingPage/lens.png" },
    { title: "Blog Title", image: "images/landingPage/lens.png" },
  ];

  useEffect(() => {
    const chat = chatRef.current;
    const chatClose = chatCloseRef.current;
    const navContainer = navContainerRef.current;

    const handleChatClick = () => {
      chat?.classList.remove("collapsed");
      chat?.classList.add("expanded");
    };

    const handleChatCloseClick = (event: Event) => {
      event.stopPropagation();
      chat?.classList.remove("expanded");
      chat?.classList.add("collapsed");
    };

    const handleNavClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains("nav-item")) {
        const currentActive = navContainer?.querySelector(".active");
        if (currentActive) {
          currentActive.classList.remove("active");
        }
        target.classList.add("active");
      }
    };

    chat?.addEventListener("click", handleChatClick);
    chatClose?.addEventListener("click", handleChatCloseClick);
    navContainer?.addEventListener("click", handleNavClick);

    return () => {
      chat?.removeEventListener("click", handleChatClick);
      chatClose?.removeEventListener("click", handleChatCloseClick);
      navContainer?.removeEventListener("click", handleNavClick);
    };
  }, []);

  return (
    <>
      <HeroPageNavBar />
      <main>
        <div className="main">
          <div className="main-container">
            <div id="hero" className="hero">
              <div className="hero-title container">
                <h2>We work with!</h2>
                <p>
                  <span className="typed" ref={typedRef}></span>
                </p>
              </div>
              <div className="work-group">
                {Array.from({ length: 25 }).map((_, index) => (
                  <div key={index} className="diamond"></div>
                ))}
              </div>
            </div>

            <div id="about" className="about-section section">
              <div className="about-container container">
                <div className="about-section-title">
                  <p className="about-subtitle" ref={aboutSubtitleRef}>
                    <span className="first-word">What is </span>
                    <span className="second-word">FilmyAI?</span>
                  </p>
                </div>
                <p className="about-description" ref={aboutDescriptionRef}>
                  Lorem Ipsum is simply dummy text...
                </p>
              </div>
            </div>

            <div id="demo" className="demo-section section">
              <div className="demo-container container">
                <div className="form">
                  <div className="form-container">
                    <form action="">
                      <div className="row">
                        <div className="col-md-6">
                          <input type="text" className="demo-form-input" placeholder="First Name" />
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="demo-form-input" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <input type="email" className="demo-form-input" placeholder="Email" />
                        </div>
                        <div className="col-md-6">
                          <input type="tel" className="demo-form-input" placeholder="Mobile Number" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <input type="submit" value="Get Demo!" className="button" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="demo-section-title">
                  <p className="first-word demo-subtitle" ref={(el) => { demoSubtitleRefs.current[0] = el}}>Need a </p>
                  <p className="second-word demo-subtitle" ref={(el) => {demoSubtitleRefs.current[1] = el}}>Demo?</p>
                </div>
              </div>
            </div>

            <div id="blog" className="blog-section section">
              <div className="blog-container container">
                <div className="blog-section-title">
                  <p className="first-word blog-subtitle" ref={(el) => {blogSubtitleRefs.current[0] = el}}>See What's</p>
                  <p className="second-word blog-subtitle" ref={(el) => {blogSubtitleRefs.current[1] = el}}>Happening!</p>
                </div>
                <div id="blog-cards" className="blog-cards">
                  {blogPosts.map((post, index) => (
                    <div className="blog-card" key={index}>
                      <img className="card-image" src={post.image} alt="Blog Image" />
                      <div className="blog-name">
                        <a href="javascript:void(0);">
                          <h5 className="blog-title">{post.title}</h5>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div id="chat" ref={chatRef} className="chat collapsed">
              <div className="chat-btn">
                <i className="fa-solid fa-question"></i>
              </div>
              <div className="chat-container">
                <i id="chatClose" ref={chatCloseRef} className="chat-close fa-solid fa-x"></i>
                <div className="chat-header">
                  <h6 className="flex-grow-1 text-center"><b>Have a Question?</b></h6>
                </div>
                <div className="chat-body">
                  <div className="message-body">
                    <div className="bot-message"><p>Hey! I am bot.</p></div>
                    <div className="my-message"><p>It's a message.</p></div>
                  </div>
                  <div className="message-form">
                    <input id="sendBtn" type="text" className="message-input" placeholder="Type here..." />
                    <i className="fa-solid fa-paper-plane send-btn"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer>
            <img className="footer-shape" src="images/footer/shape.svg" alt="" />
            <div className="footer">
              <div className="footer-container">
                <div className="footer-top-section">
                  <img src="images/footer/FilmyAI_logo.png" alt="logo" />
                  <div className="media-icons">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-x-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                </div>
                <div className="footer-bottom-section">
                  <p>© 2025 FilmyAI, All rights Reserved</p>
                  <div className="policy-container">
                    <a href="#">Privacy Policy</a>
                    <a href="documents/Terms.pdf" target="_blank">Terms of Service</a>
                    <a href="#">Accessibility</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
