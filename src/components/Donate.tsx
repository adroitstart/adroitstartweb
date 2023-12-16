const Donate = () => {
    return (
      <section className="bg-gray-100" id="donate">
        <div className="container h-screen px-4 mx-auto items-center justify-center bg-[url('/images/slide-7.jpg')] bg-cover">
            <div className="relative h-screen flex items-center justify-center overflow-hidden align-middle">
                <div className="">
                    <iframe src="https://donorbox.org/embed/adroit-general-fund" name="donorbox" height="900"></iframe>
                </div>
            </div>
        </div>
        
      </section>
    );
  };
  
  export default Donate;