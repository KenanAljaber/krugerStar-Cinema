import HomePage from "./pages/HomePage";
import "./styles/index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store/MovieStore";
import { Provider } from "react-redux";


function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
       <Routes>
        <Route path="/" element={<HomePage/>}/>
       </Routes>
       </Router>
    </div>
    </Provider>
  );
}

export default App;
