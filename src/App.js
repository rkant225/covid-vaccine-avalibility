import './App.css';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader';
import CircularRings from './Components/CircularRings/CircularRings';
import Cup from './Components/Cup/Cup';

function App() {

  return (
    <div className="app-container">
      <Home/>
      <Footer/>
      {/* <Loader color="yellow"/> */}
      {/* <CircularRings /> */}
      {/* <Cup/> */}
    </div>
  );
}

export default App;
