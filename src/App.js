import HomePage from "./pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import PageDetails from "./pages/PageDetails";
import useMovies from "./hooks/useMovies";
import About from "./pages/About";
import Contact from "./components/Contact";
import {connect} from "react-redux"
import userReducer from "./store/reducers/userReducer";
import LoginPage from "./pages/LoginPage";



function App(props) {
  useMovies();
  console.log(props.userReducer.currentUser);
  return (
    
      <Router>
    <div className="App">
      { props.userReducer.currentUser?
      <div>
        <NavBar/>
       <Routes>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/movie/:id" element={<PageDetails/>} />
        <Route path="/about-us" element={<About/>}/>
        <Route path="/contact" element={<Contact />}/>
       </Routes>
       </div> : <LoginPage/>
       }
       <Footer/>
       
    </div> 
    </Router>  
 


  );
}
const mapStateToProps=(state)=>{
  return{
    userReducer: state.userReducer
  }
}
export default connect(mapStateToProps)(App);