
import "./App.css";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login"
import AdminDashboard from "./admin-dashboard";
import UserDashboard from "./user-dashboard";
import Register from "./register";
import Layout from "./Layout";
import GetViewProducts from "./viewProducts";
import Search from "./Search";
import ViewCart from "./ViewCart";
import Home from "./Home";
import Contact from "./Contact";
import AddCategory from "./AddCategory";
import About from "./About";
import Products from './Products'
import GetCategories from "./GetCategory";
import Payment from "./Payment";
import UpdateCategory from "./UpdateCategory";
import GetOrders from "./GetOrders";
import ProductFilter from "./Fil";
import GetUsers from "./GetUsers";
import MyOrders from "./MyOrders";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Anonymous User */}
          
          <Route path="/" element={<Layout />}>
          
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>} />
            <Route path="home" element={<Home/>}/>
            <Route path="register" element={<Register />} />
            <Route path="contact" element={<Contact/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="products" element={<Products/>}/>
          </Route>
          {/* Admin Dashboard */}
          <Route path="admin-dashboard" element={<AdminDashboard />}>
            {/* <Route path="getall" element={<GetProducts />} /> */}
            <Route index  element={<GetViewProducts/>} />
            <Route path="add" element={<AddProduct />} />
            <Route path="update" element={<UpdateProduct />} />
            <Route path="GetViewProducts" element={<GetViewProducts/>}/>
            <Route path="AddCategory" element={<AddCategory/>}/>
            <Route path="ViewCategory" element={<GetCategories/>}/>
            <Route path="UpdateProduct" element={<UpdateProduct/>}/>
            <Route path="Updatecategory" element={<UpdateCategory/>}/>
            <Route path="allorders" element={<GetOrders/>}/>
            <Route path="GetUsers" element={<GetUsers/>}/>
            
            
          </Route>
          {/* User Dashboard */}
          <Route path="user-dashboard" element={<UserDashboard />}>
            <Route index  element={<Search />} />
            <Route path="search" element={<Search/>}/>
            <Route path="view-cart" element={<ViewCart />} />
            <Route path="payment" element={<Payment/>}/>
            <Route path="filter" element={<ProductFilter/>}/>
            <Route path="myorders" element={<MyOrders/>}/>
    
            
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;