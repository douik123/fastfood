import "./modal.css";
import { useState } from "react";
function Modale({AnnulerModal}) {
    const[info,setInfo]=useState(
        {
          name:"",
          email:"",
          number:"",
          adresse:"",
          Nba:"",
          Nbe:"",
          Jar:"1",
          Mar:"1",
          Aar:"2022",
          Message:""
        }
      )
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
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
        var x4=info.Message;
        var x5=Number(x3);
        var x6=info.Nba;
        var x7=info.Nbe;
        var x8=info.Jar;
        var x9=info.Mar;
        var x10=info.Aar;
        var x11=info.adresse;
        // if(x1.length<3)
        // {
        //     console.log(current.getFullYear())
        //   return(alert("Nom invalide"))
        // }
        // if((x2.length<10)||(!(x2.includes("@"))))
        // {
        //   return(alert("Email invalide"))
        // }
        // if((isNaN(x5))||(x3.length<8))
        // {
        //   return(alert("num de tel  invalide"))
        // }
        // if(x11.length<5)
        // {
        //   return(alert("Adresse invalide"))
        // }
        // if((isNaN(x6))&&(x6===""))
        // {
        //   return(alert("Nombre de adulte invalide"))
        // }
        // if((isNaN(x7))&&(x7===""))
        // {
        //   return(alert("Nombre de  enfant invalide"))
        // }
        if(((current.getDate()>x8)&&(current.getMonth()+1===Number(x9))&&(current.getFullYear()===Number(x10)))||(current.getMonth()+1>Number(x9)))
        {
          return(alert("Date invalide"))
        }
        if(x4.length<5)
        {
          return(alert("Message invalide"))
        }

        
      }
    return (
      <>
          <div className="modal">
            <div onClick={AnnulerModal} className="overlay"></div>
            <div className="modal-content">
                <label>Name</label>
            <input type="text" name="name" size="20" placeholder='Name' value={info.name} onChange={handlechange} className="InputRes"/>
            <label>Email</label>
            <input type="text" name="email" size="20" placeholder='Email' value={info.email} onChange={handlechange} className="InputRes"/>
            <label>Téléphone</label>
            <input type="text" name="number" size="20" placeholder='Téléphone' value={info.number} onChange={handlechange} className="InputRes"/>
            <label>Adresse</label>
            <input type="text" name="adresse" size="20" placeholder='Adresse' value={info.adresse} onChange={handlechange} className="InputRes"/>
            
           <label>Nombre Adultes</label>
            <input type="text" name="Nba" size="20" placeholder='Nombre Adultes' value={info.Nba} onChange={handlechange} className="InputRes"/>
            <label>Nombre enfants</label>
            <input type="text" name="Nbe" size="20" placeholder='Nombre enfants' value={info.Nbe} onChange={handlechange}className="InputRes"/>
            <label>Arrivée prévue</label>
            <select size="1" name="Jar" value={info.Jar} onChange={handlechange}>     
	<option>1</option>
	<option>2</option>
    <option>3</option>
	<option>4</option>
    <option>5</option>
	<option>6</option>
    <option>7</option>
	<option>8</option>
    <option>9</option>
	<option>10</option>
    <option>11</option>
	<option>12</option>
    <option>13</option>
	<option>14</option>
    <option>15</option>
	<option>16</option>
    <option>17</option>
	<option>18</option>
    <option>19</option>
	<option>20</option>
    <option>21</option>
	<option>22</option>
    <option>23</option>
	<option>24</option>
    <option>25</option>
	<option>26</option>
    <option>27</option>
	<option>28</option>
    <option>29</option>
	<option>30</option>
    <option>31</option>
	</select>
                <select size="1" name="Mar" value={info.Mar} onChange={handlechange}>     
	<option>1</option>
	<option>2</option>
    <option>3</option>
	<option>4</option>
    <option>5</option>
	<option>z</option>
    <option>7</option>
	<option>8</option>
    <option>9</option>
	<option>10</option>
    <option>11</option>
	<option>12</option>

	</select>
    <select size="1" name="Aar" value={info.Aar} onChange={handlechange}>     
	<option>2022</option>
	<option>2023</option>
	</select>
    <br/>
            <label>Message</label>
            <textarea rows="2" name="Message" cols="20" value={info.Message} onChange={handlechange} placeholder='Message' className="InputRes"></textarea>
            
              <div>
              <button className="annuler-modal" onClick={AnnulerModal}>
                Annuler
              </button>
              <button className="confirmer-modal" onClick={confirmation}>
                Confirmer
              </button>
            </div>
          </div>
          </div>
      </>
  );
}

export default Modale;
