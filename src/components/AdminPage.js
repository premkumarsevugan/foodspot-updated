import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import apiRequest from "./apiRequest";

const AdminPage = () =>{
    const API_URL_confirm="http://localhost:3500/confirmed";
    const [confirmed , setConfirmed] =useState([]);
    useEffect(() =>{
    const fetchItems = async () => {
        try{
            const response = await fetch(API_URL_confirm);
            if(!response.ok) throw Error("Did not recieve expected Data");
            const listItems = await response.json();
            setConfirmed(listItems);
        } catch(err){
            console.log(err.message);
        }
        finally{

        }
    }
    (async() => await fetchItems())();
},[]);

const served = async (id) => {
    const listItems = confirmed.filter((person) => person.id !== id);
        setConfirmed(listItems);

        const deleteOption = { method: 'DELETE'};
        const reqUrl = `${API_URL_confirm}/${id}`
        const result = await apiRequest(reqUrl,deleteOption);
        if(result.ok){

        }
}

    return (
        <div>
            <Navbar />
            {confirmed.map((person) => (
                <div>
                <div className="admin-manage">
                <h1>Order No : {person.id}</h1>
                <h1>table : {person.tab}</h1>
                <button 
                className="conf-btn"
                onClick={() => served(person.id)}
                >Served</button>
                </div>
                {person.finalCart.map((item) => (
                <div className="admin-card-items">
                    <div className="admin-card-img">
                        <img src={item.src} alt="Image Problem Need to Be Rectify" />

                    </div>
                    <div className="admin-card-detail">
                        <div>
                        <h2>{item.name}</h2>
                        </div>
                        <div>
                        <h2><span className="price">&#x20B9; {item.price} &nbsp;&nbsp;</span></h2>
                        </div>
                        <div>
                        <h2>Qty: 1</h2>

                        </div>
                        {/* <h3> &#x20B9; {item.price}</h3> */}
                        
                    </div>
                    
                </div>
            ))}
           <h1 style={{textAlign:"center"}}>Total Amount : &#x20B9; {person.tot}</h1> 
                <hr/>
                </div>
            ))}
        </div>
    );

}

export default AdminPage;