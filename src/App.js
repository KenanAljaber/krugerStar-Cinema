import HomePage from "./pages/HomePage";
import "./styles/index.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import PageDetails from "./components/PageDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>

      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/Details" element={<HomePage />} />
            <Route path="/" element={<PageDetails />} />
          </Routes>
          <Footer />
        </Router>

      </div>

    </>



  );
}

export default App;
