import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { AboutPage } from "./Pages/AboutPage";
import { ProductPage } from "./Pages/ProductsPage";

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={ <ProductPage/>} />
        <Route path="/about" element={ <AboutPage/>} />
      </Routes>
    </div>

  )

  
}

export default App;
