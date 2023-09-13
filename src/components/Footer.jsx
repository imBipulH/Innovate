import '../App.css'
import logo1 from '../assets/Logo (1).png'


const Footer = () => {
    return (
        <div>
             <section id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="footer-left">
              <img src={logo1} alt="Logo" />
              <p>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-right">
              <h6>Features</h6>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Benifit</li>
                <li>Pricing</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-right">
              <h6>Products</h6>
              <ul>
                <li>Task Management</li>
                <li>Company Growth</li>
                <li>Time Tracking</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-right">
              <h6>Support</h6>
              <ul>
                <li>Customer Service</li>
                <li>Accessibility</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-bottom footer-bottom-left">
              <p>@20201 Innovate.All rights reserved.</p>
            </div>  
          </div>
          <div className="col lg-4"></div>
          <div className="col-lg-4">
            <div className="footer-bottom footer-bottom-right">
              <p>Privacy policy</p>
              <p>Terms & condition</p>
            </div>  
          </div>
        </div>
      </div>
    </section>
        </div>
    );
}

export default Footer;
