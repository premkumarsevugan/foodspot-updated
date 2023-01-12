import Navbar from "./Navbar";
import Banner from "./Banner";
import AvailableItems from "./AvailableItems";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const Home = () =>{
    const [ items, setItems ] = useState([]);
      const [ fetchError, setFetchError ] = useState(null);

      const API_URL = 'http://localhost:3500/all';

      useEffect(()=>{
        const fetchItems = async () =>{
            try{
                const response = await fetch(API_URL);
                if(!response.ok) throw Error("Did not recieve expected Data");
                const listItems= await response.json();
                // console.log(listItems);
                setItems(listItems);
                setFetchError(null);
            } catch(err){
                setFetchError(err.message);
            }
            finally{
                // console.log(fetchError);
            }
        }
        setTimeout(() => {
            (async() => await fetchItems())();
        },2000)
      })
    return (
       <div>
        <Navbar />
       <Banner />
       <AvailableItems items={items}/>
       <Footer />
       </div>
    );
}
export default Home;