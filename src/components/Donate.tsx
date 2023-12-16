const Donate = () => {
    return (
      <section className="bg-gray-100" id="donate">
        <div className="relative h-screen flex items-center justify-center overflow-hidden grid grid-cols-3 content-end bg-[url('/images/slide-7.jpg')] bg-cover">
            <div></div>
            <div className="mt-24">
                <iframe src="https://donorbox.org/embed/adroit-general-fund" name="donorbox" height="900" className="container mx-auto px-4 py-16"></iframe>
            </div>
            <div></div>
        </div>
        
      </section>
    );
  };
  
  export default Donate;