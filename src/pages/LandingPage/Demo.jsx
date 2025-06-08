import { useEffect, useRef } from "react";
import "../../styles/LandingPage/Demo.css";

export default function Demo() {
  const demoSubtitleRefs = useRef([]);

  useEffect(() => {
    if (!demoSubtitleRefs.current.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = "true";
            entry.target.classList.add("slide-in-right");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    demoSubtitleRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
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
          <p className="first-word demo-subtitle" ref={(el) => (demoSubtitleRefs.current[0] = el)}>
            Need a{" "}
          </p>
          <p className="second-word demo-subtitle" ref={(el) => (demoSubtitleRefs.current[1] = el)}>
            Demo?
          </p>
        </div>
      </div>
    </div>
  );
}
