import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './banner/Banner';
import SectionFive from './hero/SectionFive';
import SectionFour from './hero/SectionFour';
import SectionOne from './hero/SectionOne';
import SectionSix from './hero/SectionSix';
import SectionThree from './hero/SectionThree';
import SectionTwo from './hero/SectionTwo';
import NavBar from './navbar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
    </div>
  );
}

export default App;
