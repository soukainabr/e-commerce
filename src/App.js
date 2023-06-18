import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import { Routes, Route } from 'react-router-dom';
import Product from './component/Product';
import Cart from './component/Card';


function App() {
  return (
    <>
      <Navbar/>
      <Routes> 
        <Route  path='/' element={<Home/>}/> 
        <Route  path='/products' element={<Products/>} /> 
        <Route  path='/products/:id' element={<Product/>} /> 
        <Route  path='/card' element={<Cart/>} /> 
      </Routes>
    </>
  );
}

export default App;
