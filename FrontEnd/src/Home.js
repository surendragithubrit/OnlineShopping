import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './App.css'
const Home = () => {
  
  return (
    <div className="home">

      <img
        src="https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""/>
      <div className="home-content">
        <h2>Discover Your Style: Trendy Finds for Every Wardrobe</h2>
        <p>
          Welcome to STLYEHUB,  Explore our extensive collection of 
          stylish and high-quality apparel, curated to meet every style 
          and need. From casual wear to office-ready outfits, find the latest
           trends and timeless classics all in one place. Our user-friendly
            platform ensures a smooth shopping experience, with personalized 
            recommendations and easy navigation.
        </p>
        <Link to="products">Explore Products</Link>
      </div>
    </div>
  );
};
export default Home;