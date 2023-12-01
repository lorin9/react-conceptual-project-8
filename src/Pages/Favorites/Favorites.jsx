import { useEffect } from "react";
import { useState } from "react";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {
    
const [favorites, setFavorites] = useState([])
const [noFound, setNoFound] = useState('')
const [isShow, setIsShow] = useState(false)
const [totalPrice, setTotalPrice] = useState(0)

useEffect(() =>{
    const favoriteItems = JSON.parse(localStorage.getItem('favorites'))
   if(favoriteItems){
    setFavorites(favoriteItems)
    const total = favoriteItems.reduce((preValue, currentItem) => preValue +currentItem.price,0)
    setTotalPrice(total)
   }
   else{
    setNoFound('no data found')
   }
}, [])

console.log(favorites)
 
const handleRemove =() =>{
    localStorage.clear()
    setFavorites([])
    setNoFound('no data found')
}
    return (
        <div>
     {
        noFound ? <p className="flex justify-center items-center h-[80vh] font-semibold text-2xl">{noFound}</p> : 

        
        <div className="">
        {
            favorites.length > 0 && 
           <div>
             <button onClick={handleRemove} className="p-4 text-white bg-green-300 block mx-auto rounded-lg">Delete All</button>
             <h1 className="text-center font-semibold text-xl m-4">Total price: {totalPrice}</h1>
           </div>
            }

          <div className="grid grid-cols-2">
          {
                isShow ? favorites.map((phone,idx) =>(<FavoriteCard key={idx} phone={phone}></FavoriteCard>))
                :
                 favorites.slice(0,4).map((phone,idx) =>(<FavoriteCard key={idx} phone={phone}></FavoriteCard>))
            }
             </div>
            {
                favorites.length > 4 &&  <button onClick={() => setIsShow(!isShow)} className="p-4 text-white bg-green-300 block mx-auto rounded-lg">{isShow ? 'See Less': 'See More'}</button>
            }
        </div>
     }
        </div>
    );
};

export default Favorites;