import React from 'react';
import EventData from '@/Data/EventData';

type Event = {
  id: number;
  date: string;
  image: string;
  title: string;
  content: string;
};

function EventList() {
  // Use Array.slice() to get the last three items
  const limitedEvents = EventData.slice(-3);

  return (
    <div>
      <div className='mt-5 p-5 grid md:grid-cols-2 lg:grid-cols-3 gap-14 '>
        {limitedEvents.map(event => (
          <EventItem
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

type EventItemProps = {
  date: string;
  image: string;
  title: string;
  content: string;
};

function EventItem({ date, image, title, content }: EventItemProps) {
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
