const AboutUs = () => {
  return (
    <section className="bg-gray-100" id="about-us" style={{ paddingTop: "12vh", marginTop: "-12vh" }}>
      {/* <ImageBackground backgroundImage={robot} className="w-screen"> */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-semibold mb-6 text-adroitBlue">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Adroit is a non-profit organization dedicated to inspiring and connecting students from different backgrounds through STEM education. We believe that every student should have access to high-quality STEM learning opportunities regardless of their socioeconomic status, race, or gender. Our team is made up of passionate educators, industry professionals, and community leaders who are committed to making a positive impact in the world.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-semibold mb-6 text-adroitOrange">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to provide equitable access to STEM education for all students. We believe that by inspiring and connecting students from different backgrounds, we can create a more diverse and inclusive STEM workforce that reflects the communities we serve. We work with schools, community organizations, and industry partners to provide hands-on learning experiences, mentorship, and resources to students from underrepresented backgrounds.
              </p>
            </div>
          </div>  
        </div>
      {/* </ImageBackground> */}
    </section>
  );
};

export default AboutUs;