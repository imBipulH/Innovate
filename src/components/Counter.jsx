// eslint-disable-next-line no-unused-vars
import React from 'react';
import shape4 from '../assets/Shape4.png'
import shape3 from '../assets/Shape3.png'
import './counter.css'

const Counter = () => {
    return (
        <div>

<section id="counter">
  <div className="counter-shape">
    <img src={shape4} alt="" />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-3 counter-details">
          <h3>53K</h3>
          <p>Happy Clients</p>
      </div>
      <div className="col-lg-3 counter-details">
          <h3>10K</h3>
          <p>Projects Done</p>
      </div>
      <div className="col-lg-3 counter-details">
          <h3>120</h3>
          <p>Gets Award</p>
      </div>
      <div className="col-lg-3 counter-details">
          <h3>16</h3>
          <p>Operated Years</p>
      </div>
    </div>
  </div>
</section>


<section id="choose">
      <div className="shape-3">
        <img src={shape3}/>
      </div>
      <div className="container cc">
        <div className="row">
          <div className="col-lg-6">
            <div className="choose-left">
              <div className="choose-icon">
                <div className="choose-circle"></div>
                <p>We solve real-world problems through people and the web.</p>
              </div>
              <div className="choose-icon">
                <div className="choose-circle"></div>
                <p>We make processes and technology work efficiently together.</p>
              </div>
              <div className="choose-icon">
                <div className="choose-circle"></div>
                <p>We advance improve existing technology through research and development.</p>
              </div>
              <div className="choose-icon">
                <div className="choose-circle"></div>
                <p>We develop long-lasting and scalable solutions, relationships partnerships.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose-right">
              <h3>Why Choose Us</h3>
              <p>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs.</p>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>

        </div>
    );
}

export default Counter;
