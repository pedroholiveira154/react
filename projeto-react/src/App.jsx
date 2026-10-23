import Hello from "./components/hello";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";


import './App.css'

function App() {
  return (

    <div id="container">
      <Header />

      <main>
        <Hello />
        <div className="produtos">
          <Card />
        </div>
      </main>

      <Footer />
    </div>

  )
}

export default App;