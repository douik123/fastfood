import './App.css';
import Navbar from './layout/NavBar.js'
import {Routes ,Route} from 'react-router-dom'
import Menu from './component/menu.js'
import Contact from './component/contact.js'
import About from './component/about.js'
import Home from './component/home.js'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Menu' element={<Menu/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='AboutUs' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
