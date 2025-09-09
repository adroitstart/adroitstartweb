import Hero from '../components/Hero';
import GraphPaper from '../components/GraphPaper';

const Programs = () => {
  return (
    <div className="">
      <Hero>
        <p className="font-sans font-bold text-4xl md:text-6xl mb-12">
          Programs
        </p>
      </Hero>
      <GraphPaper>
      <section className="py-16" style={{ paddingTop: "12vh", marginTop: "-12vh" }}>
          <div className="container mx-auto px-4 py-16">
            {/* FRC Pioneers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="border-2 border-adroitBlue flex flex-col rounded-lg bg-white">
                    <div className="p-5 font-sans font-bold">
                        <h2 className="text-3xl p-4 mb-6 text-adroitOrange">
                            FRC Team 7525 (The Pioneers) 
                        </h2>
                    </div>      
                    <div className="p-5">
                        <p className="p-4 text-gray-600 text-xl leading-relaxed">
                            For 8th through 12th grade, we offer students the opportunity to participate on Team 7525, the Pioneers, in the <i>FIRST</i> Robotics Competition. Through the Pioneers, students will refine their capabilities in our six core focus areas with direct mentorship from industry experts and professionals, building their networks and helping prepare them for their post-secondary life. They will be put to the ultimate test, designing, building, and coding an industrial-grade robot in a unique set of challenges each year. Additionally, students will have to deal with real world challenges, such as budgetary constraints, time limitations, marketing challenges, and other various problems throughout their season journey.
                        </p>
                        <br/>
                        <p className="p-4 text-gray-600 text-xl leading-relaxed">
                            To learn more about Team 7525, the Pioneers, please go to its <a className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" href="https://www.frcteam7525.org" target="_blank" rel="noopener noreferrer">website</a>, which was fully designed by students in the program.
                        </p>
                    </div>      
                </div>
                <div className="border-2 border-adroitBlue flex flex-col rounded-lg shadow-lg">
                  {/* <div className="m-5 h-full bg-[url('/images/pioneers.png')] bg-contain bg-no-repeat bg-center"> */}
                  <img className="m-5 h-full object-scale-down max-h-full drop-shadow-md rounded-md m-auto" src="images/pioneers.png" alt="Photo of the Lego Robotics Team at a competition in Cookville, TN" />
                  {/* </div> */}
                </div>
              </div>
              
              {/* FRC Robotics Banner */}
              <div className="py-16 h-full">
                <div className="border-2 h-full border-adroitBlue rounded-lg shadow-lg ">
                  <img className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto max-scale-25" src="images/slide-7.jpg" alt="Photo of Team 7525 at the Arkansas regional" />
                </div>
              </div>

              {/* FIRST Lego Robotics League */}
              <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="border-2 border-adroitBlue flex flex-col rounded-lg shadow-lg ">
                  {/* <div className="m-5 h-full bg-[url('/images/fll.png')] bg-contain bg-no-repeat bg-center"> */}
                  <img className="m-5 h-full object-scale-down max-h-full drop-shadow-md rounded-md m-auto" src="images/fll.png" alt="Photo of the Lego Robotics Team at a competition in Cookville, TN" />
                  {/* </div> */}
                </div>
                <div className="border-2 border-adroitBlue flex flex-col rounded-lg bg-white">
                    <div className="p-5 font-sans font-bold">
                        <h2 className="text-3xl p-4 text-adroitOrange">
                          FLL Team 29458 (Aventura Abejas)
                        </h2>
                    </div>      
                    <div className="p-5">
                        <p className="p-4 text-gray-600 text-xl leading-relaxed">
                            For 1st through 7th grade, we offer students the opportunity to participate on our Lego Team in the <i>FIRST</i> Lego League Competition. Through the Lego Team, students will gain foundational knowledge in our six core competency areas and direct mentorship from students in our upper-level programs, cultivating their growth and preparing them for more rigorous challenges.
                        </p>
                    </div>
                </div>
            </div>

            {/* Lego Robotics Banner */}
            <div className="py-16 h-full">
                <div className="border-2 h-full border-adroitBlue rounded-lg shadow-lg ">
                  <img className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto" src="images/lego.jpeg" alt="Photo of the Lego Robotics Team at a competition in Cookville, TN" />
                </div>
            </div>
          </div>
        </section>
      </GraphPaper>
    </div>
  );
}

export default Programs;
    