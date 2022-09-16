import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillMinusSquare } from "react-icons/ai";
import { AiFillPlusSquare } from "react-icons/ai";
function Menu({tab,commande,setCommande,setTab,total,setTotal}) {
  
    // function incrementCount(prix) {
        
    //            setTotal((preve)=>preve+prix)
    //            setTotal(total+)
    // {el.id===id?setTotal(total-el.prix):console.log("noo")
    //}
    //   }
    function pluscomm(id){
      tab.map(el=>(
        <div>
        {el.id===id?
        <>
        {setTotal((prev)=>prev+el.prix)}
        {el.quantite++}
        </>
        :console.log("noo")}
        </div>
      ))
      

    }
    function minuscomm(id) {
      tab.map(el=>(
        <div>
        {el.id===id?
        <>
        {setTotal((prev)=>prev-el.prix)}
        {el.quantite--}
        {(el.quantite+1)===0?
      deletecomm(id):
      console.log("noo")
      
      }
        </>
        :console.log("noo")}
        </div>
      ))
      
      
    }
    function deletecomm(id) {
      tab.map(el=>(
        <div>
        {el.id===id?
        <>
        {el.quantite===-1?
        setTotal(total-(el.prix*(el.quantite+2))):setTotal(total-(el.prix*(el.quantite+1)))
        }
       
        {commande.map(commandes=>(
     commandes.id===el.id?commandes.quantite=0:console.log("noo")
    ))
    }
        </>
        :console.log("noo")}
        </div>
      ))
      let updatedcommande = tab.filter((el) => el.id !== id);
      setTab(updatedcommande);

      

      
      
    }
    return (
      <div className="tabs">  
      <h1 className="TitreFac">Facture</h1>    

      {
        tab.map(tabs=>(
          
            commande.map(commandes=>(
                <div>
                 {tabs.id===commandes.id?
                 
                 <>
                 
                 <div className="panier">
                  <div>{tabs.quantite+1}</div>
                 <div className="PanierName">{commandes.name}</div>
                 <div className="PanierPrix">{commandes.prix}$</div>
                 <div><button className="delete" onClick={() => pluscomm(commandes.id)} ><AiFillPlusSquare/></button></div>
                 <div><button className="delete" onClick={() => minuscomm(commandes.id)} ><AiFillMinusSquare/></button></div>
                 <div><button className="delete" onClick={() => deletecomm(commandes.id)} ><RiDeleteBin6Line/></button></div>
                 <div>{((tabs.quantite+1)*commandes.prix).toFixed(1)}</div>
                 </div>
                 
                 
                 
              
                 </>
                 :console.log("noooo")}
                 
                </div>
                
            
            
              ))
                      ))
            }
            <div className="facture" id="myDIV">
                {/* {<button onClick={incrementCount}>Prix Total</button>} */}
                <div className="PrixTot">{total.toFixed(2)}$</div>
                
            </div>
      </div>
    );
  }
  
  export default Menu;