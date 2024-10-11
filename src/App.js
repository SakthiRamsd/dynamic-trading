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
import SectionSeven from './hero/SectionSeven';
import SectionEight from './hero/SectionEight';
import FooterSection from './footer/FooterSection';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <Banner/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <SectionEight/>
      <FooterSection/>
    </div>
  );
}

export default App;
