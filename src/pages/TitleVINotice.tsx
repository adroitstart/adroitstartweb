import GraphPaper from '../components/GraphPaper';
import Hero from '../components/Hero';

const TitleVINotice = () => {
  return (
    <div>
      <Hero>
        <p className="font-sans font-bold text-4xl md:text-6xl mb-12">
          Title VI Notice
        </p>
      </Hero>
      <GraphPaper>
        <section className="py-16" style={{ paddingTop: "12vh", marginTop: "-12vh" }}>
          <div className="container mx-auto px-4 py-16">
            <div className="bg-white border-2 border-adroitBlue rounded-lg shadow-lg p-6 md:p-10">
              <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-adroitOrange mb-8">
                  Title VI Notice
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-adroitBlue">
                      English
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      ADROIT ensures compliance with Title VI of the Civil Rights Act of 1964;
                      49 CFR, Part 21; and related statutes and regulations to the end that no
                      person shall be excluded from participation in or be denied the benefits
                      of or be subjected to discrimination under any program or activity
                      receiving federal financial assistance from the Tennessee Department of
                      Economic &amp; Community Development on the grounds of race, color, or
                      national origin.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Any person who believes he or she has been discriminated against can file
                      a complaint with the appropriate agency.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-adroitBlue">
                      Espanol
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      ADROIT garantiza el cumplimiento del Titulo VI del Acto de Derechos
                      Civiles de 1964; 49 CFR, Parte 21; y estatutos y normas relacionados para
                      asegurar que ninguna persona sea excluida o discriminada, o que se le
                      nieguen los beneficios de cualquier programa o actividad la cual reciba
                      ayuda financiera federal del Departamento de Desarrollo Economico y
                      Comunitario de Tennessee en funcion de su raza, color u origen nacional.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Cualquier persona que crea que ha sido discriminada puede presentar una
                      queja ante la agencia correspondiente.
                    </p>
                  </div>
                </div>

                <div className="mt-10 border-t border-gray-200 pt-8">
                  <h2 className="text-2xl font-bold text-adroitBlue mb-6">
                    Contact Information to File a Complaint
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border-2 border-adroitBlue rounded-lg p-6">
                      <h3 className="text-xl font-bold text-adroitOrange mb-4">
                        Tennessee Attorney General's Office
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Civil Rights Enforcement Division
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        P.O. Box 20207
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Nashville, TN 37202
                      </p>
                      <p className="text-gray-600 leading-relaxed mt-4">
                        615.741.5825
                      </p>
                      <a
                        href="mailto:CRED@ag.tn.gov"
                        className="inline-block mt-2 font-medium text-adroitBlue hover:text-adroitOrange"
                      >
                        CRED@ag.tn.gov
                      </a>
                    </div>

                    <div className="border-2 border-adroitBlue rounded-lg p-6">
                      <h3 className="text-xl font-bold text-adroitOrange mb-4">
                        Tennessee Department of Economic &amp; Community Development
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        312 Rosa L. Parks Ave., 27th Floor
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Nashville, TN 37243
                      </p>
                      <p className="text-gray-600 leading-relaxed mt-4">
                        615.741.1888
                      </p>
                      <a
                        href="mailto:ECD.Communications.Office@tn.gov"
                        className="inline-block mt-2 font-medium text-adroitBlue hover:text-adroitOrange"
                      >
                        ECD.Communications.Office@tn.gov
                      </a>
                    </div>
                  </div>

                  <a
                    href="https://www.tn.gov/humanrights/file-a-discrimination-complaint.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex mt-8 px-6 py-3 rounded-full bg-adroitBlue text-white font-semibold hover:bg-adroitOrange"
                  >
                    Online Complaint Portal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </GraphPaper>
    </div>
  );
}

export default TitleVINotice;
