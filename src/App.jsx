import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import TopHeroSection from './components/topHero/TopHeroSection';
import SecondHeroSection from './components/secondHeroSection/SecondHeroSection';
import ThirdHeroSection from './components/thirdHeroSection/ThirdHeroSection';
import ForthSection from './components/forthSection/ForthSection';
import SixthSection from './components/sixthSection/SixthSection';
import Seventh from './components/seventh/Seventh';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TopHeroSection/>
      <SecondHeroSection/>
      <ThirdHeroSection/>
      <ForthSection/>
      <SixthSection/>
      <Seventh/>
      <Footer/>
    </div>
  );
}

export default App;
