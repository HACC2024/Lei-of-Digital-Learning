import React from 'react';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

interface EventListProps {
  selectedDay: string | null;
  events: Event[];
  days: { name: string; date: string }[];
}

const EventList: React.FC<EventListProps> = ({ selectedDay, events, days }) => {
  const getEventsForSelectedDay = () => {
    if (!selectedDay) return [];
    const selectedDate = days.find(day => day.name === selectedDay)?.date;
    return events.filter(event => event.date.includes(selectedDate));
  };

  return (
    <div className="events-container">
      {getEventsForSelectedDay().map(event => (
        <div key={event.id} className="event">
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>{event.time}</p>
          <p>{event.location}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;