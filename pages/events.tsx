import React from 'react';
import EventData from '@/Data/EventData';

function Events() {
  return (
    <div>
      <div id="EventBanner" className="flex items-center justify-center py-[100px] bg-fixed bg-center bg-cover bg-gray-800">
        <div className="text-white z-[2] mt-0">
          <h2 className="mt-3 text-5xl font-bold">Events</h2>
        </div>
      </div>

    <div className='mt-5 p-5 grid md:grid-cols-2 lg:grid-cols-3 gap-14 '>
      {EventData.map(event => (
        <Event 
          key={event.id}
          image={event.image}
          title={event.title}
          content={event.content}
          date={event.date}
        />
      ))}
      </div>
    </div>
  );
}

function Event({ date, image, title, content }) {
  return (
    <div className=" flex-col items-center border border-gray-300 rounded p-4 mb-4">
      <img src={image} alt={title} />
      <h2 className="text-2xl font-extrabold mt-4 text-left mb-1">{title}</h2>
      <p className="text-gray-500 text-left">{content}</p>
      <p className="text-gray-500 text-center p-1.5">{date}</p>
    </div>
  );
}

export default Events;
