// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/home';
import About from './page/about';
import CustomPage from './page/custompage';
import Footer from './component/footer';
import Reglan from './page/reglan';
import Kaos from './page/kaos';
import Polo from './page/polo';
import Jersey from './page/jersey';
import Navigasi from './component/navigasi';

function App() {
  return (
    <div className="oddisablon">
      <Navigasi />
      <Router>
        <Routes>
          <Route exact path='/' element ={<Home />} />
          <Route path='/about' element ={<About />} />
          <Route path='/custom' element ={<CustomPage />} />
          <Route path='/reglan' element ={<Reglan />} />
          <Route path='/kaos' element ={<Kaos />} />
          <Route path='/polo' element ={<Polo />} />
          <Route path='/jersey' element ={<Jersey />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
