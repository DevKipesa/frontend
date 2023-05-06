import "./App.css";
import HeroSection from "./componets/HeroSection/HeroSection";
import Navbar from "./componets/Navbar/Navbar";
import List from "./componets/List/List";
import Footer from "./componets/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <List />
      <Footer />
    </div>
  );
}

export default App;
