import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";
import Home from "./pages/Home";
// import History from './pages/History'
import Causes from "./pages/Causes";
import Precaution from "./pages/Precaution";
import Avoid from "./pages/Avoid";
import Feature from "./pages/Features";

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/history' element={<History/>}/> */}
          <Route path="/features" element={<Feature />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/precaution" element={<Precaution />} />
          <Route path="/solution" element={<Avoid />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
