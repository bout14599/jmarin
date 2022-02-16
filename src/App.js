import './App.css';
import Card_container from './components/Card_container';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Card_container />
      <Footer />
    </div>
  );
}

export default App;
