import React from "react";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import { useState } from "react";


const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />
};

function FeedBack (){
  const[info,setInfo]=useState(
    {
      rate:0,
      feedcategory:"",
      message:""
    }
  )
  const[rate,setRate]=useState(0)
  const handlechange =(e)=>{
    setInfo({
        ...info,[e.target.name]:e.target.value
    })
  }
  const handlechang =(e)=>{
    setRate(e)
    setInfo({
      ...info,[e.target.name]:rate
  })
    
  }
  const confirmation=()=>
      {
        var x1=info.feedcategory;
        var x2=info.message;
        if(rate===0)
        {
          return(alert("Donner ton avis"))
        }
        if(x1==="")
        {
          return(alert("Categorie invalide"))
        }
        if((x2.length<5))
        {
          return(alert("Message invalide"))
        }
        if((x1.length>=1)&&(x2.length>=5))
        {
          alert("votre message a été envoyé avec succès")
          
        }
      }
  return(
  <>  
  <div className="FeedBack">
  <div className="DescriptionFeed">We would like your feedback to improve our website.</div>
  <div className="DescriptionFeed">What is your opinon of this website?</div>
    <div><Rate name="rate"  defaultValue={0} character={({ index }) => customIcons[index + 1] }  className="DescriptionFeedRate" onChange={handlechang}/></div>
    <hr/>
    <div className="DescriptionFeed">Please select your feedback category below.</div>
    <div className="ButtonsCategory">
      <div><input type="radio" className="ButtonReact"  value="Suggestion" name="feedcategory" onChange={handlechange}/>Suggestion</div>
      <div><input type="radio" className="ButtonReact"  value="Somethingisnotquiteright" name="feedcategory" onChange={handlechange}/>Something is not quite right</div>
      <div><input type="radio" className="ButtonReact"  value="Compliement" name="feedcategory" onChange={handlechange}/>Compliement</div>
    </div>
    <hr/>
    <div className="DescriptionFeed">Please leave your feedback below:</div>
    <textarea className="MessageFeed" value={info.message} name="message" onChange={handlechange}></textarea>
    <div className="ButtonFeed" onClick={confirmation}><button >Envoyer</button></div>
    </div>
  </>
)};

export default FeedBack;