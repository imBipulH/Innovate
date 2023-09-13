import '../App.css'
import plan_basic from '../assets/plan-basic.png'
import plan_proff from '../assets/plan-professional (2).png'
import plan_exclu from  '../assets/plan-exclusive.png'


// eslint-disable-next-line no-unused-vars
import React from 'react';

const Plan = () => {
    return (
        <div>
            <section id="plan">
<div className="container">
  <div className="row">
    <div className="col-lg-12">
      <div className="plan-head">
        <h2>Choose The Right Plan</h2>
      </div>
    </div>
  </div>
  <div className="row">
    
      <div className="col-lg-4">
        <div className="basic">
          <h3>Basic</h3>
          <img src={plan_basic} alt="Basic-Plan" />
          <h4><span className="dollar-sign">$</span>160</h4>
          <p> Responsive Design
            Dynamic Elements
            Service Pages
            Custom Design & Features</p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="basic">
          <h3>Professional</h3>
          <img src={plan_proff} alt="Basic-Plan" />
          <h4><span className="dollar-sign">$</span>240</h4>
          <p> Responsive Design
            Dynamic Elements
            Service Pages
            Custom Design & Features</p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="basic">
          <h3>Exclusive</h3>
          <img src={plan_exclu} alt="Basic-Plan"/>
          <h4><span className="dollar-sign">$</span>325</h4>
          <p> Responsive Design
            Dynamic Elements
            Service Pages
            Custom Design & Features</p>
        </div>
      </div>
    
  </div>
</div>

</section>
        </div>
    );
}

export default Plan;



