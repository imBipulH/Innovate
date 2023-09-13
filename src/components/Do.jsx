import webDesign from '../assets/web-design.png'
import './do.css'

const Do = () => {
    return (
        <div>
            <section id="do">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="do-title">
                <h3>What We Do</h3>
                <p>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs.</p>
                <button>Contact Us</button>
            </div>       
          </div>
          <div className="col-lg-4">
            <div className="do-service">
              <img src={webDesign}/>           
              <h4>web Design & Dev </h4>
              <p>Social Media has changed the way we interact & do business while creating</p>
              <a href="">Read More</a>
            </div>  
          </div>
          <div className="col-lg-4">
            <div className="do-service">
              <img src={webDesign}/>           
              <h4>Software Dev </h4>
              <p>Social Media has changed the way we interact & do business while creating</p>
              <a href="">Read More</a>
            </div>  
          </div>     
          <div className="col-lg-4 mt-5">
            <div className="do-service">
              <img src={webDesign}/>           
              <h4>web Design & Dev </h4>
              <p>Social Media has changed the way we interact & do business while creating</p>
              <a href="">Read More</a>
            </div>  
          </div>
          <div className="col-lg-4 mt-5">
            <div className="do-service">
              <img src={webDesign} />           
              <h4>web Design & Dev </h4>
              <p>Social Media has changed the way we interact & do business while creating</p>
              <a href="#">Read More</a>
            </div>  
          </div>
          <div className="col-lg-4 mt-5">
            <div className="do-service">
              <img src={webDesign}/>           
              <h4>Software Dev</h4>
              <p>Social Media has changed the way we interact & do business while creating</p>
              <a href="">Read More</a>
            </div>
        </div>
      </div>
      </div>
    </section>

        </div>
    );
}

export default Do;
