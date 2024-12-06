import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="font-sans text-white">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
