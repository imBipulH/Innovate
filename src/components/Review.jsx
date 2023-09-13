import '../App.css'
import locan from '../assets/Locan.png'
import navLeft from '../assets/navigation-left.png'
import navRight from '../assets/navigation-right.png'


const Review = () => {
    return (
        <div>
            <section id="review">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="review-head">
              <p>What The People Thinks About Us </p>
            </div>
          </div>
        </div>
        <div className="row">
          
          <div className="col-lg-11 m-auto">
            <div className="review-details">
              <img src={locan} alt="Locan Depina photo" />
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="arrow arrow-l">
                <img src={navLeft} alt="" />
              </div>
              <div className="arrow arrow-r">
                <img src={navRight} alt="" /> 
              </div>
              <p>Lesser Replenish bearing they’re him cattle kind dominion. You 
                which fill place. Land she’d subdue divided gathering blessed
                seasons it. Without, wherein days.
              </p>
              <h4>Lukan Depina</h4>
              <h5>Ceo And Head Of Idea</h5>
            </div>
          </div>
        </div>
      </div>
    </section>

        </div>
    );
}

export default Review;
