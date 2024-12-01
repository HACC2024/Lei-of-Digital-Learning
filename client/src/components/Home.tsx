import { useState, useEffect } from 'react';
import './css/Home.css'; 
import EventList from '../components/EventList';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [startOfWeek, setStartOfWeek] = useState(new Date(2024, 10, 10));
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  useEffect(() => {
    const testEvents = [
      { id: 1, title: 'Walk-in Session - Community Center', description: 'Get assistance from a Digital Navigator.', date: 'October 25, 2024', time: '10:00 AM - 12:00 PM', location: 'Honolulu Library' },
      { id: 2, title: 'Community Art Workshop', description: 'Explore your creativity with guidance from local artists.', date: 'October 25, 2024', time: '1:00 PM - 3:00 PM', location: 'Honolulu Library' },
      { id: 3, title: 'Parenting Support Group', description: 'Connect with other parents and share experiences.', date: 'October 25, 2024', time: '4:00 PM - 5:30 PM', location: 'Honolulu Library' },
      { id: 4, title: 'Evening Yoga Class', description: 'A gentle yoga session to wind down the day.', date: 'October 25, 2024', time: '6:00 PM - 7:00 PM', location: 'Honolulu Library' },
      { id: 5, title: 'Digital Skills Workshop', description: 'Learn essential computer skills in a free workshop.', date: 'October 26, 2024', time: '2:00 PM - 4:00 PM', location: 'Maui Community Center' },
      { id: 6, title: 'Senior Tech Help', description: 'Tech assistance for seniors to learn smartphone basics.', date: 'October 26, 2024', time: '10:00 AM - 11:30 AM', location: 'Maui Community Center' },
      { id: 7, title: 'Job Interview Workshop', description: 'Tips and practice for successful job interviews.', date: 'October 26, 2024', time: '12:00 PM - 1:30 PM', location: 'Maui Community Center' },
      { id: 8, title: 'Music Therapy Session', description: 'Relax with guided music therapy.', date: 'October 26, 2024', time: '5:00 PM - 6:00 PM', location: 'Maui Community Center' },
      { id: 9, title: 'Online Safety Workshop', description: 'Learn how to stay safe online and protect your personal information.', date: 'October 27, 2024', time: '1:00 PM - 3:00 PM', location: 'Waikiki Library' },
      { id: 10, title: 'Photography Basics', description: 'Learn the basics of photography with your smartphone.', date: 'October 27, 2024', time: '10:00 AM - 12:00 PM', location: 'Waikiki Library' },
      { id: 11, title: 'Job Application Workshop', description: 'Get assistance filling out job applications.', date: 'October 27, 2024', time: '3:30 PM - 5:00 PM', location: 'Waikiki Library' },
      { id: 12, title: 'Movie Night', description: 'Enjoy a family-friendly movie screening.', date: 'October 27, 2024', time: '6:00 PM - 8:00 PM', location: 'Waikiki Library' },
      { id: 13, title: 'Resume Building Session', description: 'Get help creating or updating your resume with one-on-one assistance.', date: 'October 28, 2024', time: '11:00 AM - 1:00 PM', location: 'Kailua Community Center' },
      { id: 14, title: 'Coding Basics Workshop', description: 'Introduction to coding for beginners.', date: 'October 28, 2024', time: '10:00 AM - 12:00 PM', location: 'Kailua Community Center' },
      { id: 15, title: 'Nutrition for Families', description: 'Learn tips on how to keep your family healthy and happy.', date: 'October 28, 2024', time: '1:30 PM - 2:30 PM', location: 'Kailua Community Center' },
      { id: 16, title: 'Evening Meditation Session', description: 'Join us for a guided meditation to relax and unwind.', date: 'October 28, 2024', time: '5:00 PM - 6:00 PM', location: 'Kailua Community Center' },
      { id: 17, title: 'Job Application Workshop', description: 'Receive guidance on job applications and learn about job search resources.', date: 'October 29, 2024', time: '9:00 AM - 11:00 AM', location: 'Hilo Public Library' },
      { id: 18, title: 'Financial Literacy Class', description: 'An introductory class on budgeting and managing finances.', date: 'October 29, 2024', time: '3:00 PM - 5:00 PM', location: 'Pearl City Civic Center' },
      { id: 19, title: 'Language Exchange Meetup', description: 'Practice a new language with native speakers.', date: 'October 29, 2024', time: '6:00 PM - 7:30 PM', location: 'Hilo Public Library' },
      { id: 20, title: 'Basic Coding Workshop', description: 'Learn the basics of coding in this beginner-friendly workshop.', date: 'October 29, 2024', time: '10:00 AM - 12:00 PM', location: 'Kona Innovation Center' },
      { id: 21, title: 'Intro to Social Media', description: 'Learn the basics of using social media safely and effectively.', date: 'November 3, 2024', time: '9:00 AM - 10:00 AM', location: 'Honolulu Library' },
      { id: 22, title: 'Beginner Excel Workshop', description: 'An introduction to using Excel for data organization and calculations.', date: 'November 3, 2024', time: '10:30 AM - 11:30 AM', location: 'Honolulu Library' },
      { id: 23, title: 'Email Essentials', description: 'Learn how to create, send, and organize emails efficiently.', date: 'November 3, 2024', time: '12:00 PM - 1:00 PM', location: 'Honolulu Library' },
      { id: 24, title: 'Networking for Success', description: 'Learn networking strategies to build professional connections.', date: 'November 3, 2024', time: '6:00 PM - 7:00 PM', location: 'Honolulu Library' }
    ];

    const testLocations = ['Honolulu', 'Kailua', 'Maui', 'Pearl City'];
    
    setEvents(testEvents);
    setLocations(testLocations);
  }, []);

  const generateWeekDays = () => {
    const daysOfWeek = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      daysOfWeek.push({
        name: day.toLocaleDateString('en-US', { weekday: 'long' }),
        date: day.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      });
    }
    return daysOfWeek;
  };

  const days = generateWeekDays();

  const goToPreviousWeek = () => {
    setStartOfWeek(prev => new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() - 7));
  };

  const goToNextWeek = () => {
    setStartOfWeek(prev => new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() + 7));
  };

  const toggleDaySelection = (dayName: string) => {
    setSelectedDay((prevSelectedDay) => (prevSelectedDay === dayName ? null : dayName));
  };
    
  return (
    <div className="home-container">

      <div className='location-selector'>
        <select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}>
          <option value="">Select a Location</option>
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>
      
      <nav className="weekly-calender">
        <button onClick={goToPreviousWeek}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
          </svg>
        </button>
        <ul className='week-days'>
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
        <button onClick={goToNextWeek}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </button>
      </nav>

      <div className="event-list-container">
        <EventList selectedDay={selectedDay} events={events} days={days} />
      </div>
    </div>
  );
};

export default Home;