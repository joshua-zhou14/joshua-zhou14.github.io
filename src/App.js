import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import CopyRight from './components/CopyRight';
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/About" element={<About></About>} />
        <Route path="/Gallery" element={<Gallery />}/>
        <Route path="/Gallery/:id" element={<Gallery />}/>
      </Routes>
    </>
  );
}

export default App;
