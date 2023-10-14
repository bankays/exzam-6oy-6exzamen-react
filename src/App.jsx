import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import Add from "./pages/add/Add";

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="products" element={<Products />}></Route>
        <Route path="add" element={<Add />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
