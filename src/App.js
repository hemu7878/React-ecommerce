
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import NotFound from './pages/NotFound';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="*" element={<NotFound/>}/>


    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
