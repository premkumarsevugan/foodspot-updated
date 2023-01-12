import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import apiRequest from "./components/apiRequest";
const CartPage = () => {
    const [ finalCart, setFinalCart ] = useState([]);
    const [ confirmed, setConfirmed ] = useState([]);
    const [fetchError,setFetchError] = useState(null);
    var i,to=0;
    for(i=0;i<finalCart.length;i++){
        to=to+finalCart[i].price;
    }
    
    console.log(fetchError);


    const remove = async (id) =>{
        const listItems = finalCart.filter((item) => item.id !== id);
        setFinalCart(listItems);

        const deleteOption = { method: 'DELETE'};
        const reqUrl = `${API_URL_cart}/${id}`
        const result = await apiRequest(reqUrl,deleteOption);
        if(result.ok){

        }

    }

    const API_URL_cart = 'http://localhost:3500/cart';
useEffect(() =>{
    const fetchItems = async () => {
        try{
            const response = await fetch(API_URL_cart);
            if(!response.ok) throw Error("Did not recieve expected Data");
            const listItems = await response.json();
            setFinalCart(listItems);
        } catch(err){
            setFetchError(err);
        }
        finally{

        }
    }
    (async() => await fetchItems())();
},[]);


const API_URL_confirm="http://localhost:3500/confirmed";
useEffect(() =>{
    const fetchItems = async () => {
        try{
            const response = await fetch(API_URL_confirm);
            if(!response.ok) throw Error("Did not recieve expected Data");
            const listItems = await response.json();
            setConfirmed(listItems);
        } catch(err){
            setFetchError(err)
        }
        finally{

        }
    }
    (async() => await fetchItems())();
},[]);

const confirm = () =>{
    const id=confirmed.length+1;
    const tot=to;
    const tab=finalCart[1].table;
    const newlyAdded = {id,tot,tab,finalCart};
    const conf_items = [...confirmed,newlyAdded];
    setConfirmed(conf_items);
    console.log(confirmed);

    const postOption ={
        method : 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body:JSON.stringify(newlyAdded)
    }
    const result = apiRequest(API_URL_confirm,postOption);
    if(result.ok){

    }
    
    finalCart.map((item) => remove(item.id));
    setFinalCart([]);
    
}

    // finalCart.map((item) => setTot(tot+item.price));
    
    return (
        <div>
            <Navbar />
            <h1 className="Head">Your Cart</h1>
            <div className="AvailableItems">
            {
                finalCart.map((item) => (
                    <div className="card-items">
                    <div className="card-img">
                        <img src={item.src} alt="Image Problem Need to Be Rectify" />
                        
                    </div>
                    <div className="card-detail">
                        <h2>{item.name}<span className="price">&#x20B9; {item.price} &nbsp;&nbsp;</span></h2>
                        {/* <h3> &#x20B9; {item.price}</h3> */}
                        <button
                        onClick={() => remove(item.id)}
                        >Remove</button>
                    </div>
                    
                </div>
                ))
            }
            </div>
            <div className="cart-conf-div">
                <h1>Total Amount : &#x20B9;{to}</h1>
            <button className="conf-btn"
            onClick={confirm}
            >Confirm</button>
            </div>
            <Footer />
        </div>
    );
}

export default CartPage;