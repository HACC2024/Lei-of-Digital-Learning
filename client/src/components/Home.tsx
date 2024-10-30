import { useState, useEffect } from 'react';
import './css/Home.css'; 

const Home = () => {
  const [events, setEvents] = useState([]);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  useEffect(() => {
    const testEvents = [
      {
        id: 1,
        title: 'Walk-in Session - Community Center',
        description: 'Get assistance from a Digital Navigator.',
        date: 'October 25, 2024',
        time: '10:00 AM - 12:00 PM',
        location: 'Honolulu Library',
      },
      {
        id: 2,
        title: 'Digital Skills Workshop',
        description: 'Learn essential computer skills in a free workshop.',
        date: 'October 26, 2024',
        time: '2:00 PM - 4:00 PM',
        location: 'Maui Community Center',
      },
    ];
    setEvents(testEvents);
  }, []);

  const days = [
    { name: 'Monday', date: 'Oct 23' },
    { name: 'Tuesday', date: 'Oct 24' },
    { name: 'Wednesday', date: 'Oct 25' },
    { name: 'Thursday', date: 'Oct 26' },
    { name: 'Friday', date: 'Oct 27' },
    { name: 'Saturday', date: 'Oct 28' },
    { name: 'Sunday', date: 'Oct 29' },
  ];

  const toggleDaySelection = (dayName: string) => {
    setSelectedDay((prevSelectedDay) => (prevSelectedDay === dayName ? null : dayName));
  };
    
  return (
    <div className="home-container">
      <nav className="weekly-calender">
        <ul>
        {days.map((day) => (
            <li
              key={day.name}
              onClick={() => toggleDaySelection(day.name)}
              className={selectedDay === day.name ? 'selected' : ''}
            >
              <div>{day.name}</div>
              <div>{day.date}</div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
