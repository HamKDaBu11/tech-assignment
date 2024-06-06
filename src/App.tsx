import './App.scss';
import chart from "./assets/chart.png";
import padlock from "./assets/padlock.png";
import trophy from "./assets/trophy.png";
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Info from './components/info/Info';
import Nav from "./components/nav/Nav";
import Registration from './components/registration/Registration';
import Slider from './components/slider/Slider';

function App() {
  return (
    <div className="app">
      <Nav />
      <Info />
      <div className='card-container'>
        <Card className="app-card-large">
          <Card className="app-card-large__mini">
            <img src={padlock} height={64} width={64} />
            <div className='app-card-large__info'>
              <p className='app-card-large__heading'>24/7 Support</p>
              <span className='app-card-large__detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            </div>
          </Card>
          <Card className="app-card-large__mini">
            <img src={chart} height={64} width={64} />
            <div className='app-card-large__info'>
              <p className='app-card-large__heading'>1000+ of reviews</p>
              <span className='app-card-large__detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            </div>
          </Card>
          <Card className="app-card-large__mini">
            <img src={trophy} height={64} width={64} />
            <div className='app-card-large__info'>
              <p className='app-card-large__heading'>And more!</p>
              <span className='app-card-large__detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            </div>
          </Card>
        </Card>
      </div>
      <Slider />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
