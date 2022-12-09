import HomePage from "./pages/HomePage";
import "./styles/index.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <NavBar />
     <div className="App">
       <HomePage/>
    </div>
    <Footer />
    </>
   

   
  );
}

export default App;
