import React from 'react';
import EventList from '@/components/EventList';

function Events() {
  return (
    
    <div>
      <div id="EventBanner" className="flex items-center justify-center py-[100px] bg-fixed bg-center bg-cover bg-gray-800 scrollbar scrollbar-thumb-blue-950">
        <div className="text-white z-[2] mt-0">
          <h2 className="mt-3 text-5xl font-bold">Events</h2>
        </div>
      </div>

    <EventList />
    </div>
    
  );
}



export default Events;
