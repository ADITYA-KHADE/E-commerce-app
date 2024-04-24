
import './App.css';
import Navbar from './components/navbar/Navbar'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Shop from './pages/shop';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/cart';
import Login from './pages/Loginsignup';
import Footer from "./components/footer/footer"
import men_banner from "./components/assets/banner_mens.png"
import women_banner from "./components/assets/banner_women.png"
import kid_banner from "./components/assets/banner_kids.png"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/mens" element={<Category banner={men_banner} sex="men"/>} />
          <Route path="/womens" element={<Category banner={women_banner} sex="women"/>} />
          <Route path="/kids" element={<Category banner={kid_banner} sex="kid"/>} />
          <Route path="/product" element={<Product/>}>
            {/* <Route path=":productId" element={<Product/>} /> */}
          </Route>
          <Route path="/product/:productid" element={<Product />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
