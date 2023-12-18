const Donate = () => {
    return (
        <section className="bg-gray-100" id="donate">
            <div style={{ minHeight: '1200px' }} className="flex flex-col h-screen justify-center items-center bg-[url('/images/slide-7.jpg')] bg-cover bg-center">
                <div className="">
                    <iframe src="https://donorbox.org/embed/adroit-general-fund" name="donorbox" scrolling="no"
                        style={{ height: '900px', width: '350px' }}
                        className="w-full h-full rounded-lg flex justify-center items-center"></iframe>
                </div>
            </div>
        </section>
    );
};
  
export default Donate;


  