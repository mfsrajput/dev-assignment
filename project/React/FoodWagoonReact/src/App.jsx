
import "../Assets/Css/bootstrap.min.css";
import "../Assets/Css/style.css";
import "../Assets/Css/responsive.css";
import "../Assets/Css/line-awesome.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;