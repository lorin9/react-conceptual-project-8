import swal from "sweetalert";

const PhoneCard = ({phone}) => {

    const {id, image, phone_name, brand_name, price, rating} = phone || {}

    const handleAddToFavorites = () =>{
       const addedFavoritesArray =[]

       const favoriteItems = JSON.parse(localStorage.getItem('favorites'))
       if(!favoriteItems){
       addedFavoritesArray.push(phone)
       localStorage.setItem('favorites',JSON.stringify(addedFavoritesArray))
       swal("Good job!", "Product added successfully!", "success");
       }
       else{
         const isExist = favoriteItems.find(phone => phone.id === id)
        if(!isExist){
          addedFavoritesArray.push(...favoriteItems,phone)
          localStorage.setItem('favorites',JSON.stringify(addedFavoritesArray))
          swal("Good job!", "Product added successfully!", "success");
        }
        else{
          swal("ERROR!", "already exist!", "error");
        }
        
       }
       
    }

    return (
        <div className="flex h-[80vh] justify-center items-center">
             <div className="  relative  items-center flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
  <div
    className=" relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src={image}
      alt="card-image" className="object-cover w-full h-full" />
  </div>
  <div className="p-6">
    <h6
      className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
      {phone_name}
    </h6>
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
   {brand_name}
    </h4>
    <a href="#" className="inline-block"><button onClick={handleAddToFavorites}
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        Add to favorites<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2" className="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg></button></a>
  </div>
        </div>  
        </div>
    );
};

export default PhoneCard;