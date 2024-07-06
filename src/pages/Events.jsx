import React from 'react';
// import eventsData from '../data/events';
// import EventCard from '../components/EventCard'; 


// TODO:
// - Add events data in events.md File
// - parse and display the data in Events.jsx

const Events = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* {eventsData.map(event => (
                    <EventCard key={event.id} event={event} />
                ))} */}
            </div>
        </div>
    );
};

export default Events;
