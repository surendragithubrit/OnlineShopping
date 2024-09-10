import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './About.css'; // Import custom styles
import About1 from './About1.jpg';
import About2 from './About2.jpg';

const About = () => {
  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="display-4">About Us</h1>
        <p className="lead">Discover who we are and what drives us.</p>
      </div>
      <div className="row">
        {/* Mission Card */}
        <div className="col-md-6 mb-4">
          <div className="card border-0 shadow-sm">
            <img
              src={About1}
              className="card-img-top rounded"
              alt="Company"
            />
            <div className="card-body">
              <h5 className="card-title"><strong>Our Mission</strong></h5>
              <p className="card-text">
                At <strong>STLYEHUB</strong>, our mission is to deliver a seamless shopping experience that combines a vast selection of high-quality products with exceptional customer service. We believe in making shopping enjoyable and stress-free, whether you’re looking for the latest fashion trends, cutting-edge electronics, or beautiful furniture for your home.
              </p>
            </div>
          </div>
        </div>
        {/* Values Card */}
        <div className="col-md-6 mb-4">
          <div className="card border-0 shadow-sm">
            <img
              src={About2}
              className="card-img-top rounded"
              alt="Values"
            />
            <div className="card-body">
              <h5 className="card-title"><strong>Our Values</strong></h5>
              <p className="card-text">
                We are committed to providing an inclusive shopping environment with integrity and transparency. Our values drive us to offer exceptional products at competitive prices while ensuring sustainability and social responsibility in our operations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <h3>Our Categories</h3>
        <p>
          Explore our wide range of categories:
          <br />
          Clothing, Furniture, Electronics, Toys, Footwear, and more.
        </p>
        <a href="home" className="btn btn-primary btn-lg">Shop Now</a>
      </div>
    </div>
  );
};

export default About;
