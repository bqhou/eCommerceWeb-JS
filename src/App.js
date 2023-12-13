
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
// import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png' 


function App() {
  return (
    <div >
     <Router>
     <Navbar></Navbar>
     
   <Routes>
    <Route path='/' element={<Shop/>}></Route>
    <Route path='/men' element={<ShopCategory  banner={men_banner} category='men'/>}></Route>
    <Route path='/women' element={<ShopCategory banner={women_banner} category='women'/>}></Route>
    <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid'/>}></Route>
    <Route path='/product' element={<Product/>}>
      <Route path=':productID' element={<Cart/>}/>
    </Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/login' element={<LoginSignup/>}></Route>
   </Routes>

   <Footer></Footer>
     </Router>

    
    
    </div>
  );
}

export default App;
