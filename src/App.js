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
import { useEffect } from "react";
import { setCurrentUser } from "./store/actions/actions";



function App(props) {
  useMovies();
  useEffect(()=>{
    if(localStorage.getItem("currentUser")){
        const currUSer=JSON.parse(localStorage.getItem("currentUser"));
        props.setCurrentUser(currUSer);
    }
  },[])
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
       </div> : <Route path="/" element={<LoginPage/>}/>
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
const mapDispatcherToProps={
  setCurrentUser:setCurrentUser
}
export default connect(mapStateToProps,mapDispatcherToProps)(App);