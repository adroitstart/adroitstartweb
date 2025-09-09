const AboutUs = () => {
  return (
    <section className="py-16" id="about-us" style={{ paddingTop: "12vh", marginTop: "-12vh" }}>
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 flex flex-wrap gap-6">
            <div className="flex flex-col border-2 border-adroitBlue justify-between m-4 bg-white rounded-lg shadow-lg">
              <h2 className="text-3xl p-4 font-semibold mb-6 text-adroitOrange">
                Who We Are
              </h2>
              <p className="p-4 text-gray-600 text-xl leading-relaxed">
                Adroit is a non-profit organization dedicated to inspiring and connecting students from different backgrounds through STEM education. We believe that every student should have access to high-quality STEM learning opportunities regardless of their socioeconomic status, race, or gender. Our team is made up of passionate educators, industry professionals, and community leaders who are committed to making a positive impact in the world.
              </p>
            </div>
            <div className="flex flex-col border-2 border-adroitBlue justify-between m-4 bg-white rounded-lg shadow-lg">
              <h2 className="p-4 text-3xl font-semibold mb-6 text-adroitOrange">
                Our Mission
              </h2>
              <p className="p-4 text-gray-600 text-xl leading-relaxed">
                Our mission is to provide equitable access to STEM education for all students. We believe that by inspiring and connecting students from different backgrounds, we can create a more diverse and inclusive STEM workforce that reflects the communities we serve. We work with schools, community organizations, and industry partners to provide hands-on learning experiences, mentorship, and resources to students from underrepresented backgrounds.
              </p>
            </div>
          </div>  
        </div>
    </section>
  );
};

export default AboutUs;