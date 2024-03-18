import logo from './logo.svg';
import './App.css';
import Sidebar from './components/dashboard/Sidebar';
import Sidebarlayout from './components/Layout/Sidebarlayout';
import Home from './components/home/Home';
import Generator from './components/qrcode/Generator';
import Account from './components/account/Account';
import Content from './components/dashboard/Content';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Pricing from './components/pricing/Pricing';
import Header from './components/header/Header';
import Signin from './components/register/Signin';
import Login from './components/register/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Header/>}/>
      <Route exact path='/registerpage' element={<Signin/>}/>
      <Route exact path='/loginpage' element={<Login/>}/>
      <Route exact path='/maincontent' element={<Content />}/>
    <Route exact path ="/dashboard" element={<Content/>}/>
    <Route exact path ="/url-shortner-page" element={<Home/>}/>
   <Route exact path ="/qrcode" element={<Generator/>}/>
    <Route exact path = '/contact' element ={<Contact/>}/>
    <Route exact path = '/profilepage' element ={<Account/>}/>
     <Route exact path = '/pricing' element ={<Pricing/>}/>
      </Routes>


    </BrowserRouter>
  );
}

export default App;
