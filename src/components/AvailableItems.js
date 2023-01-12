import { useState } from "react";
import { Link } from "react-router-dom";
import apiRequest from "./apiRequest";
const AvailableItems = (props) => {
    const items = props.items;
    const [cart,setCart] = useState([]);
    const [table,setTableno] = useState([]);
    const [total,setTotal] = useState(0);
    const API_URL = 'http://localhost:3500/cart'
    const tab = () =>{
        const tno ={table}
    }
    
    const addCart = (item) =>{
        const id =cart.length+1;
        const name = item.name;
        const price =item.price;
        const src=item.src;
        const checked=item.checked;

        
        const newlyAdded= {id,src,name,price,checked,table}
        const cartItems = [...cart, newlyAdded];
        setCart(cartItems);
        setTotal(total+price);
        const postOption ={
            method : 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(newlyAdded)
        }
        const result = apiRequest(API_URL,postOption);
        if(result.ok){

        }

    }
    return (
        <div className="AvailableItems-big">
            <h1 className="Head">Enter Your Table No :&nbsp; &nbsp; <input type="number" id="tno" name="tno" onChange={(e) =>{
                setTableno(e.target.value);
                
            }} /></h1>
            <h1 className="Head">Available Items</h1>
            <div className="AvailableItems">
            {items.map((item) => (
                <div className="card-items">
                    <div className="card-img">
                        <img src={item.src} alt="Image Problem Need to Be Rectify" />

                    </div>
                    <div className="card-detail">
                        <h2>{item.name}<span className="price">&#x20B9; {item.price} &nbsp;&nbsp;</span></h2>
                        {/* <h3> &#x20B9; {item.price}</h3> */}
                        <button
                         onClick={()=>addCart(item)}
                         >Add To Cart</button>
                    </div>
                    
                </div>
            ))}
            </div>
        <div className="total-cart">
            Your Cart Total is : {total} 
            <div className="btns">
            <Link to="/cartpage"><button onClick={tab}>Manage</button></Link>
            <Link to=""><button>Confirm</button></Link>
            </div>
        </div>

        </div>
    );
}

export default AvailableItems;