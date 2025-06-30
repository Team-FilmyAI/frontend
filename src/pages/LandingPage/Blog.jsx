import "../../styles/LandingPage/Blog.css";
import { useEffect, useRef } from "react";

export default function Blog() {
  const blogSubtitleRefs = useRef([]);

  useEffect(() => {
    if (!blogSubtitleRefs.current.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = "true";
            entry.target.classList.add("slide-in-left");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    blogSubtitleRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const blogPosts = [
    { title: "Blog Title", image: "images/landingPage/lens.png" },
    { title: "Blog Title", image: "images/landingPage/lens.png" },
    { title: "Blog Title", image: "images/landingPage/lens.png" },
  ];

  return (
    <div id="blog" className="blog-section section">
      <div className="blog-container container">
        <div className="blog-section-title">
          <p className="first-word blog-subtitle" ref={(el) => (blogSubtitleRefs.current[0] = el)}>
            See What's
          </p>
          <p className="second-word blog-subtitle" ref={(el) => (blogSubtitleRefs.current[1] = el)}>
            Happening!
          </p>
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
  );
}
