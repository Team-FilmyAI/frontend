import "./Footer.css";

export default function Navbar() {
  return (
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
            <p>© 2025 FlimyAI, All rights Reserved</p>
            <div className="policy-container">
              <a href="#">Privacy Policy</a>
              <a href="documents/Terms.pdf" target="_blank">Terms of Service</a>
              <a href="#">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
