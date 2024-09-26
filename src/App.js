import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'




function App() {
  return (
    <>


    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
       
     
        <Route path='/Cart' element={<Cart/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
  
     
     
      

    </>
  );
}

export default App;
