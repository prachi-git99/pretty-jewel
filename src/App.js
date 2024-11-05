import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
