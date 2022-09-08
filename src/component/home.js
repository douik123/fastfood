import burger from '../assets/zaza.png'
import {Link} from 'react-router-dom'
function Home() {
    return (
      <div className="Home" >
<div class="contenant">
<img src={burger} alt="burger" className='burger' /> 
  <div class="button"><Link to="/destination"><button className="ButtonOrd">Order</button></Link></div>
</div>      
      </div>
    );
  }
  
  export default Home;
  