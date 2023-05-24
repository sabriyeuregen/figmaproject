import "./App.css";
import Header from "./components/Header/Header";
import StartBootstrap from "./components/StartBootstrap/StartBootstrap";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
const App = () => {
  return <div>
    <Header/>
    <StartBootstrap/>
    <Portfolio/>
    <About/>
  </div>;
};

export default App;
