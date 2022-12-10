
import HomePage from "./pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.css";
import store from "./store/MovieStore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"




function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <NavBar/>
       <Routes>
        <Route path="/" element={<HomePage/>}/>
       </Routes>
       <Footer/>
       </Router>
    </div>   
    </Provider>

  );
}

export default App;
