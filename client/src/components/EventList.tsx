import React, { useState } from 'react';
import EventDetail from './EventDetail';
import './css/EventList.css';

const EventList: React.FC<EventListProps> = ({ selectedDay, events, days }) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const getEventsForSelectedDay = () => {
    if (!selectedDay) return [];
    const selectedDate = days.find(day => day.name === selectedDay)?.date;
    return events.filter(event => event.date.includes(selectedDate));
  };

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleBack = () => {
    setSelectedEvent(null);
  };

  if (selectedEvent) {
    return <EventDetail event={selectedEvent} onBack={handleBack} />;
  }

  return (
    <div className="events-container">
      {getEventsForSelectedDay().map(event => (
        <div key={event.id} className="event-card" onClick={() => handleEventClick(event)}>
          <h3>{event.title}</h3>
          <p>{event.time}</p>
          <p>{event.location}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;