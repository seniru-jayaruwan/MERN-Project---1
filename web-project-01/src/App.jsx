
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import ProductCard from './components/productCard'
import SuperProduct from './components/superProduct'
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import Registration from './pages/registerPage';
import AdminPage from './pages/adminPage';


function App() {
  return (
   <BrowserRouter>
    <div className="w-full h-screen">
      <Routes path="/">
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/admin/*" element={<AdminPage/>} />
      </Routes>

    </div>
   </BrowserRouter>
  );
}
export default App
