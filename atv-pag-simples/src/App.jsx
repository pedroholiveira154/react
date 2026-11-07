
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import SobreNos from "./pages/SobreNos";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-shell">
      <Header />

      <main className="container page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<SobreNos />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
