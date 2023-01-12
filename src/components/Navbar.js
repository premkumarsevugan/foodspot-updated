import pic from "./img/logo.png"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
            <div className="Navbar">
                <div className="logo">
                    <img src={pic} alt="logo" />
                    <h1>OrAnGe</h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cartpage">Cart</Link></li>
                        <li><Link to="/login">Admin-Login</Link></li>
                    </ul>
                </nav>
            </div>
            
    );
}

export default Navbar;