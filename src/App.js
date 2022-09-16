import './App.css';
import Navbar from './layout/NavBar.js'
import {Routes ,Route} from 'react-router-dom'
import Commande from './component/Commande.js'
import Contact from './component/Contact.js'
import About from './component/About.js'
import Home from './component/Home.js'
import FeedBack from './component/FeedBack.js'
import { useState } from 'react';
function App() {
const [total,setTotal]=useState(0)
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='Commande' element={<Commande total={total} setTotal={setTotal}/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='FeedBack' element={<FeedBack/>}/>
        <Route path='AboutUs' element={<About/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
