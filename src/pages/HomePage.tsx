import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import MeetUs from '../components/MeetUs';
import Donate from '../components/Donate';

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <AboutUs/>
        {/* What is FIRST? */}
        {/* Sections for robotics */}
        <MeetUs/>
        {/* Newsletter / Get involved info */}
        <Donate/>
    </div>
  );
}

export default HomePage;
    