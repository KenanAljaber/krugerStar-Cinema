import HomePage from "./pages/HomePage";
import "./styles/index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
        <Route path="/" element={<HomePage/>}/>
       </Routes>
       </Router>
    </div>

   
  );
}

export default App;
