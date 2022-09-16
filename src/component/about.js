import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function About() {
    return (
      <div className="About">
        <div className="About">
            <h1 className='titre'>Learn More About DouikFood</h1>
            <h3>DouikFood is a locally and family owned business that was founded in 2022. Were
dedicated to creating wonderful sweet surprises that you'Il absolutely love. When you visit our shop, you
won't believe your eyes with the incredible range af options that are available with us.</h3>
<h1 className='titre'>Contact Info</h1>
<div className='ContactUs'><AiFillFacebook className='icon'/><a href="https://www.facebook.com/ahmed.douik.7/" target="_blank"><h2>Douik Food</h2></a></div>
<div className='ContactUs'><AiFillInstagram className='icon'/><a href="https://www.instagram.com/douik_ahmed/" target="_blank"><h2>Douik_Food12</h2></a></div>
        </div>
      </div>
    );
  }
  
  export default About;
  