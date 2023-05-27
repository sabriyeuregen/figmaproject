import "./App.css";
import Header from "./components/Header/Header";
import StartBootstrap from "./components/StartBootstrap/StartBootstrap";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import ContactMe from "./components/ContactMe/ContactMe";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import Footer from "./components/Footer/Footer";
const App = () => {
  return <div>
    <Header/>
    <StartBootstrap/>
    <Portfolio/>
    <About/>
    <ContactMe/>
    <ContactInfo/>
    <Footer/>
  </div>;
};

export default App;
