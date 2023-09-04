import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Pricing from './components/Pages/Pricing/Pricing';
import Blog from './components/Pages/Blog/Blog';
import Service from './components/Pages/Service/Service';
import Footer from './components/Footer/Footer';
import Shop from './components/Pages/Shop/Shop';

function App() {
  return (
    <>

    <Header />
    <Routes>
      <Route>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/service' element={<Service />} />
      <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
