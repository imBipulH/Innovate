import '../App.css'
import impacti1 from '../assets/impact-i1.png'
import impacti2 from '../assets/impact-i2.png'
import impactR8 from '../assets/impact-right.png'


const Impact = () => {
    return (
        <div>
            
    <section id="impact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="impact-head">
              <h2>We create real impact</h2>
              <p>We design, build and support websites and apps for clients worldwide. Create beautiful, eye-catching on-page messages without the need for a developer.
              </p>
            </div>
            </div>
        </div>
        <div className="row">        
            <div className="col-lg-1">
              <div className="icon">
                <img src={impacti1} alt="dashboard-icon" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="impact-details">
                <h6>Competitive analysis</h6>
                <p>With an all-new look and powerful features, Ekko is the best way to ensure success for your business.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="impact-right">
                <img src={impactR8} alt="impact-img" />
              </div>
            </div>
        </div>
        <div className="row">        
            <div className="col-lg-1">
              <div className="icon">
                <img src={impacti2} alt="dashboard-icon" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="impact-details">
                <h6>Strategy And research</h6>
                <p>Save money and start building your website using the best tools available on the market today.</p>
              </div>
            </div>
        </div>
      </div>
    </section>


        </div>
    );
}

export default Impact;
