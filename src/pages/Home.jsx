
import React from 'react';
import HeroSection from '../components/HeroSection';
import EventCard from '../components/EventsCard';
import ServiceSection from '../components/ServiceSection';

// TODO:
// - add content

const Home = () => {
    return (
        <>
           <HeroSection />
           {/* <div className="flex flex-col items-center lg:mx-0 mt-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Recent Events
            </h2>
          </div> */}
        <EventCard />
        <ServiceSection />
        </>
    );
};

export default Home;
