import { useState } from "react";
function Contact() {
    const[info,setInfo]=useState(
        {
          name:"",
          email:"",
          number:"",
          message:""
        }
      )
      const handlechange =(e)=>{
        setInfo({
            ...info,[e.target.name]:e.target.value
        })
      }
      const confirmation=()=>
      {
        var x1=info.name;
        var x2=info.email;
        var x3=info.number;
        var x4=info.message;
        var x5=Number(x3);
        if(x1.length<3)
        {
          return(alert("nom invalide"))
        }
        if((x2.length<10)||(!(x2.includes("@"))))
        {
          return(alert("email invalide"))
        }
        if((isNaN(x5))||(x3.length<8))
        {
          return(alert("num de tel  invalide"))
        }
        if(x4.length<5)
        {
          return(alert("message invalide"))
        }

        if((x1.length>=3)&&(x2.length>=10)&&(x3.length>=8)&&(x4.length>=5)&&(!isNaN(x5))&&(x2.includes("@")))
        {
          alert("votre message a été envoyé avec succès")
        }
      }
    console.log(info.name)
    return (
      <div className="Contact">
 <form class="form">
  <h2 className="TitleContact">CONTACT US</h2>
  <p type="Name:"><input id="name" className="InputContact" placeholder="Write your name here.."   required minlength="3" name="name" value={info.name} onChange={handlechange}/></p>
  <p type="Email:"><input className="InputContact" placeholder="Let us know how to contact you back.." required minlength="10" name="email" value={info.email} onChange={handlechange}/></p>
  <p type="Phone Number :"><input className="InputContact" placeholder="Write your phone number here.."  required minLength="8" name="number" value={info.number} onChange={handlechange}/></p>
  <p type="Message:"><input className="InputContact" placeholder="What would you like to tell us.." required minlength="5" name="message" value={info.message} onChange={handlechange}/></p>
  <button className="SubmitContact" onClick={confirmation}>Send Message</button>

</form>
      </div>
    );
  }
  
  export default Contact;
  