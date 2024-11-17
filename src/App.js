
import Home from "./pages/Home";
import About from "./pages/About";
import Wall from "./pages/Wall";
import Registration from "./pages/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




const App = () => {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/register" element={<Registration />}></Route>
      <Route path="/wall" element={<Wall />}></Route>
      </Routes>
    
    

    </Router>  
    </div>
  );
}

export default App;
