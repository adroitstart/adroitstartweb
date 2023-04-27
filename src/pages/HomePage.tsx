import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import MeetUs from '../components/MeetUs';

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <div>
          <AboutUs/>
        </div>
        {/* What is FIRST? */}
        {/* Sections for robotics */}
        <div>
          <MeetUs/>
        </div>
        {/* Newsletter / Get involved info */}
    </div>
  );
}

export default HomePage;
    