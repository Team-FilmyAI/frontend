import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { heroPageMessages } from "../../constants/messages";
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
                <h2>{heroPageMessages.heroTitle}</h2>
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
                    <span className="first-word">{heroPageMessages.aboutSubtitleFirstWord} </span>
                    <span className="second-word">{heroPageMessages.aboutSubtitleSecondWord}</span>
                  </p>
                </div>
                <p className="about-description" ref={aboutDescriptionRef}>
                  {heroPageMessages.aboutDescription}
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
                          <input type="text" className="demo-form-input" placeholder={heroPageMessages.firstNamePlaceholder} />
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="demo-form-input" placeholder={heroPageMessages.lastNamePlaceholder} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                        <input type="email" className="demo-form-input" placeholder={heroPageMessages.emailPlaceholder}/>
                        </div>
                        <div className="col-md-6">
                        <input type="tel" className="demo-form-input" placeholder={heroPageMessages.mobileNumberPlaceholder}/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <input type="submit" value={heroPageMessages.submitButtonText} className="button" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="demo-section-title">
                  <p className="first-word demo-subtitle" ref={(el) => { demoSubtitleRefs.current[0] = el}}>{heroPageMessages.demoSubtitleFirstWord} </p>
                  <p className="second-word demo-subtitle" ref={(el) => {demoSubtitleRefs.current[1] = el}}>{heroPageMessages.demoSubtitleSecondWord}</p>
                </div>
              </div>
            </div>

            <div id="blog" className="blog-section section">
              <div className="blog-container container">
                <div className="blog-section-title">
                  <p className="first-word blog-subtitle" ref={(el) => {blogSubtitleRefs.current[0] = el}}>{heroPageMessages.blogSubtitleFirstWord}</p>
                  <p className="second-word blog-subtitle" ref={(el) => {blogSubtitleRefs.current[1] = el}}>{heroPageMessages.blogSubtitleSecondWord}</p>
                </div>
                <div id="blog-cards" className="blog-cards">
                  {blogPosts.map((post, index) => (
                    <div className="blog-card" key={index}>
                      <img className="card-image" src={post.image} alt={heroPageMessages.blogImageAlt} />
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
                  <h6 className="flex-grow-1 text-center"><b>{heroPageMessages.chatHeaderTitle}</b></h6>
                </div>
                <div className="chat-body">
                  <div className="message-body">
                    <div className="bot-message"><p>{heroPageMessages.chatBotMessage}</p></div>
                    <div className="my-message"><p>{heroPageMessages.chatUserMessage}</p></div>
                  </div>
                  <div className="message-form">
                    <input id="sendBtn" type="text" className="message-input" placeholder={heroPageMessages.chatInputPlaceholder} />
                    <i className="fa-solid fa-paper-plane send-btn"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer>
            <img className="footer-shape" src={heroPageMessages.footerShapeImage} alt="" />
            <div className="footer">
              <div className="footer-container">
                <div className="footer-top-section">
                  <img src={heroPageMessages.footerLogoImage} alt={heroPageMessages.footerLogoAlt} />
                  <div className="media-icons">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-x-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                </div>
                <div className="footer-bottom-section">
                  <p>{heroPageMessages.footerCopyright}</p>
                  <div className="policy-container">
                    <a href="#">{heroPageMessages.footerAccessibility}</a>
                    <a href="documents/Terms.pdf" target="_blank">{heroPageMessages.footerTermsOfService}</a>
                    <a href="#">{heroPageMessages.footerAccessibility}</a>
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