import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import PhonesCard from "../../Components/Phones/PhonesCard";


const Home = () => {

    const phones = useLoaderData()
    console.log(phones)
    return (
        <div>
           <Banner></Banner>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                phones?.map((phone, idx) =><PhonesCard key={idx} phone={phone}></PhonesCard>)
            }
           </div>
        </div>
    );
};

export default Home;