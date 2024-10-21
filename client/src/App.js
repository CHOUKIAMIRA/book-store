import {  Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Panier from "./components/Panier";
import AddBook from "./components/AddBook";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
function App() {
  return (
    <div className="App">
  
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/add-book" element={<AddBook/>} />
          <Route path="/success" element={<Success/>}/>
          <Route path="/cancel" element={<Cancel/>}/>
        </Routes>
   
    </div>
  );
}

export default App;
