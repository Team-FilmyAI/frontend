import { useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import "./HeroPageNavBar.css";

type HeroPageNavBarProps = {
  hideLinks?: boolean;
};

export default function HeroPageNavBar({ hideLinks = false }: HeroPageNavBarProps) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const hamBtnRef = useRef<HTMLDivElement | null>(null);
  const navbarContainerRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  // Resize handler for navbar container responsiveness
  useEffect(() => {
    const handleResize = () => {
      const navbarContainer = navbarContainerRef.current;
      if (!navbarContainer) return;

      if (window.innerWidth >= 768) {
        navbarContainer.classList.add("container");
      } else {
        navbarContainer.classList.remove("container");
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sidebar toggle + nav active switch
  useEffect(() => {
    const sidebar = sidebarRef.current;
    const hamBtn = hamBtnRef.current;

    if (!sidebar || !hamBtn) return;

    const toggleMenu = () => {
      sidebar.classList.toggle("menu-visible");
    };

    const handleSidebarNavClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains("nav-item")) {
        const currentActive = sidebar.querySelector(".active");
        if (currentActive) currentActive.classList.remove("active");
        target.classList.add("active");
      }
    };

    hamBtn.addEventListener("click", toggleMenu);
    sidebar.addEventListener("click", handleSidebarNavClick);

    return () => {
      hamBtn.removeEventListener("click", toggleMenu);
      sidebar.removeEventListener("click", handleSidebarNavClick);
    };
  }, []);

  // Top navbar scroll effect + nav link active handling
  useEffect(() => {
    const navbar = navbarRef.current;
    const navContainer = navContainerRef.current;

    if (!navbar || !navContainer) return;

    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    const handleNavClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains("nav-item")) {
        const currentActive = navContainer.querySelector(".active");
        if (currentActive) currentActive.classList.remove("active");
        target.classList.add("active");
      }
    };

    handleScroll(); // on mount

    window.addEventListener("scroll", handleScroll);
    navContainer.addEventListener("click", handleNavClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      navContainer.removeEventListener("click", handleNavClick);
    };
  }, []);

  return (
    <>
      <nav>
        <div id="navbar" ref={navbarRef} className="custom-navbar">
          <div ref={navbarContainerRef} className="navbar-container container">
            <div className="logo-container">
              <img src="images/footer/FilmyAI_logo.png" alt="FilmyAI Logo" />
            </div>
            <div id="ham-btn" ref={hamBtnRef} className="ham-btn">
              <i className="fa fa-bars"></i>
            </div>

            <div
              id="nav-container"
              ref={navContainerRef}
              className="menu-container"
            >
              <ul>
                <li>
                  <a href="#hero" className="nav-item active">
                    Home
                  </a>
                </li>
                {!hideLinks && (
                  <>
                    <li>
                      <a href="#about" className="nav-item">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#demo" className="nav-item">
                        Demo
                      </a>
                    </li>
                    <li>
                      <a href="#blog" className="nav-item">
                        Blogs
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {!hideLinks && (
              <div className="user-container">
                <ul>
                  <li>
                    <Link to="/Login">Login</Link>
                  </li>
                  <li>
                    <Link to="/SignUp">SignUp</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div id="sidebar" ref={sidebarRef} className="sidebar">
        <ul className="sidebar-nav">
          <li>
            <a href="#hero" className="nav-item active">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-item">
              About
            </a>
          </li>
          <li>
            <a href="#demo" className="nav-item">
              Demo
            </a>
          </li>
          <li>
            <a href="#blog" className="nav-item">
              Blogs
            </a>
          </li>
          <li>
            <Link to="/Login" className="nav-item">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
