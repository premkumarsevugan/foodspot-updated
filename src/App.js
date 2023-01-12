import Home from "./components/Home";
import CartPage from "./CartPage";
import AdminPage from "./components/AdminPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartpage" element={<CartPage />}/>
        <Route path ="/adminpage" element = {<AdminPage/>}/>
        <Route path ="/login" element = {<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
