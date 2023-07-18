import React from 'react';
import EventData from '@/Data/EventData';

type Event = {
  date: string;
  image: string;
  title: string;
  content: string;
};

type EventProps = {
  event: Event;
};

function EventList() {
  return (
    <div>
      <div className='scrollbar scrollbar-thumb-blue-950 mt-5 p-5 grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
        {EventData.map(event => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

function EventItem({ event }: EventProps) {
  const { date, image, title, content } = event;

  return (
    <div className="flex-col items-center border border-gray-300 rounded p-4 mb-4">
      <img src={image} alt={title} />
      <h2 className="text-2xl font-extrabold mt-4 text-left mb-1">{title}</h2>
      <p className="text-gray-500 text-left">{content}</p>
      <p className="text-gray-500 text-center p-1.5">{date}</p>
    </div>
  );
}

export default EventList;
