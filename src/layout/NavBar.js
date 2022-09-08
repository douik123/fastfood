import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <div className="NavBar">
    <div className="WebName"><h2>DouikFood</h2></div>   
    <div className="details">
    <div className="pages"><Link to='/'><h5>Home</h5></Link></div>
    <div className="pages"><Link to='/Menu'><h5>Menu</h5></Link></div>
    <div className="pages"><Link to='/Contact'><h5>Contact</h5></Link></div>
    <div className="pages"><Link to='/AboutUs'><h5>About Us</h5></Link></div>
    <div ><button className="ButtonRes">Reservation</button></div>
    </div>               
    </div>
  );
}

export default NavBar;
