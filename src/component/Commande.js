
import { useState} from "react";
import Card from './CommCard.js'
import DOUBLESTEAKHOUSE from '../assets/DOUBLESTEAKHOUSE.png'
import DOUBLECHEESEBACONXXL from '../assets/DOUBLECHEESEBACONXXL.png'
import DOUBLEWHOPPERCHEESE from '../assets/DOUBLEWHOPPERCHEESE.png'
import TRIPLECHEESE from '../assets/TRIPLECHEESE.png'
import Panier from './Panier.js'
function CommMenu({total,setTotal}) {
  const [tab, setTab] = useState([{name:"",id:null,prix:null,quantite:null}]);
  const[commande,setCommande]= useState([
    {
    name: "DOUBLE STEAKHOUSE",
    prix: 6.40,
    rate: 4,
    image : <img src={DOUBLESTEAKHOUSE} alt="DOUBLE STEAKHOUSE" className='DOUBLE STEAKHOUSE' />,
    description:"Une nouvelle star est née ! Deux viandes de boeuf grillées à la flamme, du bacon, des oignons croustillants et une délicieuse sauce barbecue pour une double dose de plaisir." ,
    add:"no",
    id:1,
    quantite:0,
    },
    {
      name: "DOUBLE CHEESE BACON XXL",
      prix: 8.90,
      rate: 5,
      image : <img src={DOUBLECHEESEBACONXXL} alt="DOUBLECHEESEBACONXXL" className='DOUBLECHEESEBACONXXL' />,
      description:"Que demander de plus ? Deux viandes de boeuf grillées à la flamme, du fromage et du bacon … Simple, généreux et efficace." ,
      add:"no",
      id:2,
      quantite:0,
    },
    {
      name: "DOUBLE WHOPPER® CHEESE",
      prix: 8.50,
      rate: 3,
      image : <img src={DOUBLEWHOPPERCHEESE} alt="DOUBLE WHOPPER® CHEESE" className='DOUBLE WHOPPER® CHEESE' />,
      description:"Fan du WHOPPER® ? Vous allez adorer sa version grande taille ! Deux savoureuses viandes de boeuf grillées à la flamme et une délicieuse tranche de fromage." ,
      add:"no",
      id:3,
      quantite:0,
    },
    {
      name: "TRIPLE CHEESE",
      prix: 7.90,
      rate: 5,
      image : <img src={TRIPLECHEESE} alt="TRIPLE CHEESE" className='TRIPLE CHEESE' />,
      description:"Trois viandes de bœuf grillées à la flamme, trois tranches de fromage, du ketchup, de la moutarde et deux rondelles de cornichon." ,
      add:"no",
      id:4,
      quantite:0,
    },
    
 

  ]);
  
    return (
      <div className="CommMenu"> 
      {
        commande.map(commandes=>(
          <div>
           <Card data={commandes} tab={tab} setTab={setTab} total={total} setTotal={setTotal}/>
          </div>
      
      
        ))} 
        <Panier commande={commande}tab={tab} setCommande={setCommande} setTab={setTab} total={total} setTotal={setTotal} />
        </div>

    );
  }
  
  export default CommMenu;
  