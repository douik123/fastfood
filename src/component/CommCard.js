import React  from 'react';
import { useEffect } from 'react';
import { Rate } from 'antd';
import { useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
function App({data,tab,setTab,total,setTotal}) { 

const ajouter=()=>{
  
  { data.quantite===0?<>{setTab([...tab,{name:data.name,id:data.id,prix:data.prix,quantite:data.quantite}])}
    {setTotal(total+data.prix)}
    {tab.map(el=>(
     data.id===el.id?el.quantite++:console.log("noo")
    ))
    }
    {data.quantite++}
    </>
    :
    <>
    {data.quantite++}
    {setTotal(total+data.prix)}
    {tab.map(el=>(
     data.id===el.id?el.quantite++:console.log("noo")
    ))
    }
    </>
    
  }
  }
  
  return(
<div className='card'>
<div className='rate'><Rate disabled defaultValue={data.rate} /></div>
<div className='imageburger'>{data.image}</div>
<div className='e'>{data.name}</div>
<div className='description'>{data.description}</div>  
<div className='prix'>{data.prix}$</div>
<button className='buttonPanier' onClick={ajouter}><div className='ButtonAjout'>ajouter au panier</div><BsFillPlusCircleFill/></button>

</div> 

  
  );

}

export default App;