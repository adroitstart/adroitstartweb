import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import MeetUs from '../components/MeetUs';
import { decodeEmail } from '../utils';
import GraphPaper from '../components/GraphPaper';


const HomePage = () => {
  const benEmail = "YmVubmFkb2xza3lAYWRyb2l0c3RhcnQub3Jn";

  return (
    <div className="">
      <Hero>
        <p className="font-sans font-bold text-4xl md:text-6xl mb-12">
          Imagine it. Design it. Build it.
        </p>
        <a
          href={`mailto:${decodeEmail(benEmail)}`}
          className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-6 rounded-full"
        >
          Get Involved
        </a>
      </Hero>
      <GraphPaper>
        <AboutUs/>
        {/* What is FIRST? */}
        {/* Sections for robotics */}
        <MeetUs/>
      </GraphPaper>
      {/* Newsletter / Get involved info */}
    </div>
  );
}

export default HomePage;
    