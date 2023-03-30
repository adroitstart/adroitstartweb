import React from 'react';
import Header from '../partials/Header'
import Hero from '../partials/Hero'
import AboutUs from '../partials/AboutUs'
import MeetUs from '../partials/MeetUs'
import Footer from '../partials/Footer'
// import GetInvolved from './MailchimpSubscribeForm'
function HomePage() {
  return (
    <div>
        <Header/>
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
        {/* <GetInvolved/> */}
        <Footer/>
    </div>
  );
}

export default HomePage;
    