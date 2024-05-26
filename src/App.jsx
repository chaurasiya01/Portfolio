 
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './Componate/HomePage';
import "./CssFolder/Header.css";
import "./CssFolder/HomePage.css";
import About from './Componate/AboutPage';
 import "./CssFolder/AboutPage.css";
 import Portfolio from './Componate/PortfolioPage';
 import  './CssFolder/PortfolioPage.css';
 import  './CssFolder/ContactPage.css';
 import Contact from './Componate/ContactPage';

function App() {
  return <>
 {/* <Header></Header> */}
 
 <HomePage></HomePage>
 <About></About>
 <Portfolio></Portfolio>
 <Contact></Contact>
    </>
  
}

export default App
