import {HashRouter,
Route, Routes
} from "react-router-dom";
import Header from './components/header/Header.jsx';
import './App.scss';
import Footer from './components/footer/Footer.jsx';
import Home from './pages/home/Home';
import Error from './pages/error/Error';
import Apropos from './pages/apropos/Apropos'





function App() {
  
  return (
    
   <HashRouter>
      <Header/>
        <Routes>
      <Route path="/Home" element= {<Home/>} />
      <Route path="*" element= {<Error/>} />
      <Route path="/Apropos" element= {<Apropos/>} />
      </Routes> 
      <Footer/>
    </HashRouter>
    
  )
}

export default App
