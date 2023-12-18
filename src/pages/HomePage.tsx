import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import MeetUs from '../components/MeetUs';
import Donate from '../components/Donate';

const HomePage = () => {
  return (
    <div className="">
        <Hero/>
        <section className="bg-[url('/images/graph-paper.png')] bg-cover bg-center">
          <AboutUs/>
          {/* What is FIRST? */}
          {/* Sections for robotics */}
          <MeetUs/>
        </section>
        {/* Newsletter / Get involved info */}
    </div>
  );
}

export default HomePage;
    