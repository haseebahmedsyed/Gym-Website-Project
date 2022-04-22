import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Packages from './components/Packages/Packages';
import TitaniumPlus from './components/Packages/TitaniumPlus';
import Titanium from './components/Packages/Titanium';
import Platinium from './components/Packages/Platinium';
import Gold from './components/Packages/Gold';
// import Gold from './components/Packages/Silver';
import Silver from './components/Packages/Silver';
import ShopItems from './components/shop/ShopItems';
import Cart from './components/shop/Cart';
import CartState from './context/cartState';
import Bill from './components/shop/Bill';
import Contact from './components/contactUs/Contact';
import Facilities from './components/facilities/Facilities';
import RegisterNow from './components/register/RegisterNow';
import AboutUs from './components/aboutUs/AboutUs';
import Login from './components/login/Login';

function App() {
  // const myloc = useLocation();
  return (
    <>
      <CartState>
        <Router>
          <div className="App ">
            <Navbar />

            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='package' exact element={<Packages />}>
                <Route path='' exact element={<TitaniumPlus />} />
                <Route path='titanium' exact element={<Titanium />} />
                <Route path='platinium' exact element={<Platinium />} />
                <Route path='gold' exact element={<Gold />} />
                <Route path='silver' exact element={<Silver />} />
              </Route>
              <Route path='shop' exact element={<ShopItems />} />
              <Route path='cart' exact element={<Cart />} />
              <Route path='checkout' exact element={<Bill/>}/>
              <Route path='contact' exact element={<Contact/>}/>
              <Route path='facilities' exact element={<Facilities/>}/>
              <Route path='register' exact element={<RegisterNow/>}/>
              <Route path='aboutUs' exact element={<AboutUs/>}/>
              <Route path='login' exact element={<Login/>}/>
            </Routes>

          
              {/* <Footer /> */}

          </div>
        </Router>


      </CartState>

    </>
  );
}

export default App;
