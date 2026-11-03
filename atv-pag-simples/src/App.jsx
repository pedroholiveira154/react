import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Banner from "./components/Banner";


import './App.css'

function App() {
  return (

    <div className="m-5">
      <Header />
      <main className="container d-flex flex-column bg-white p-5 gap-3">
        <Banner />
        <div className="container">
          <div className="row g-3">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>

      <Footer />
    </div>

  )

}

export default App;