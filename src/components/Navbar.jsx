import './navbar.css';
import logo from '../assets/Logo.png'
import banner from '../assets/Banner-Left-Anim.png'
import mainBanner from '../assets/banner.jpg'

const Navbar = () => {
    return (
        <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img className="logo" src={logo} />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">
            Service
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">
            Price
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">
            Blog
          </a>
        </li>
      </ul>
        <button className="btn contactBtn btn-outline-success" type="submit">
          Contact Us
        </button>
    </div>
  </div>
</nav>


<section id="banner" style={{background: `URL(${mainBanner})`}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className="banner-details text-center">
              <h1>YOU’RE UNIQUE. YOUR WEBSITE SHOULD BE TOO</h1>
              <p>A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business.</p>
              <div className="banner-btn">
                <button className="btn-1">Get Free Quoto</button>
                <button className="btn-2">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-left">
        <img src={banner} />
      </div>
    </section>

        </div>
    );
};




export default Navbar;
