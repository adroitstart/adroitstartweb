import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import MeetUs from '../components/MeetUs';

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <AboutUs/>
        {/* What is FIRST? */}
        {/* Sections for robotics */}
        <MeetUs/>
        {/* Newsletter / Get involved info */}
    </div>
  );
}

export default HomePage;
    