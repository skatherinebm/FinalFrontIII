
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/detail/:id" element={<Detail/>}/>
              <Route path="/favoritos" element={<Favs/>}/>

            </Routes>

          <Footer/>
        </BrowserRouter>
      </div>
  );
}

export default App;
