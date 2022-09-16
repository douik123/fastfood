import {Link} from 'react-router-dom'
import { useState } from 'react';
import Modal from './modal.js';
function NavBar() {
  const [modal, setModal] = useState(false);
const AnnulerModal = () => {
  setModal(!modal);
};
  return (
    <div className="NavBar">
    <div className="WebName"><Link to='/'><h2>DouikFood</h2></Link></div>   
    <div className="details">
    <div className="pages"><Link to='/'><h5>Home</h5></Link></div>
    <div className="pages"><Link to='/Commande'><h5>Commande</h5></Link></div>
    <div className="pages"><Link to='/Contact'><h5>Contact</h5></Link></div>
    <div className='pages'><Link to='FeedBack'><h5>FeedBack</h5></Link></div>
    <div className="pages"><Link to='/AboutUs'><h5>About Us</h5></Link></div>
    <div ><button className="ButtonRes" onClick={AnnulerModal}>Reservation</button></div>
    {modal&& <Modal AnnulerModal={AnnulerModal}/>}
    </div>               
    </div>
  );
}

export default NavBar;
