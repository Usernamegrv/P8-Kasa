import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/header/Header.jsx";
import "./App.scss";
import Footer from "./layout/footer/Footer.jsx";
import Home from "./pages/home/Home";
import Error from "./pages/errorPage/Error.jsx";
import Apropos from "./pages/apropos/Apropos";
import Logement from "./pages/logement/Logement.jsx";
import Container from "./layout/container/Container.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Logement" element={<Logement />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
