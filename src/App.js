import './App.css';
import Copyrights from './components/Copyrights';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Footer />
      <Copyrights />
    </div>
  );
}

export default App;
