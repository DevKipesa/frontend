import "./App.css";
import HeroSection from "./componets/HeroSection/HeroSection";
import Navbar from "./componets/Navbar/Navbar";
import List from "./componets/List/List";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <List />
    </div>
  );
}

export default App;
