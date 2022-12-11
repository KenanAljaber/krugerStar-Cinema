import HomePage from "./pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.css";
import store from "./store/MovieStore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import PageDetails from "./pages/PageDetails";
import useMovies from "./hooks/useMovies";
import About from "./pages/About";
import Contact from "./components/Contact";
import Favourites from "./components/Favoutites";


function App() {
  useMovies();
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <NavBar/>
       <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/movie/:id" element={<PageDetails/>} />
        <Route path="/about-us" element={<About/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/favourites" element={<Favourites />}/>
       </Routes>
       <Footer/>
       </Router>
    </div>   
    </Provider>


  );
}

export default App;