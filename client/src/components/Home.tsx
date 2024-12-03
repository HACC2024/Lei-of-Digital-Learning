import { useState, useEffect } from 'react';
import './css/Home.css'; 
import EventList from '../components/EventList';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

const Home = () => {
  const [events, setEvents] = useState<Event []>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [startOfWeek, setStartOfWeek] = useState(new Date(2024, 10, 10));
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  useEffect(() => {
    const testEvents = [
      { id: 1, title: 'Walk-in Session - Community Center', description: 'Get assistance from a Digital Navigator.', date: '10/25/2024', time: '10:00 AM - 12:00 PM', location: 'Honolulu Library' },
      { id: 2, title: 'Community Art Workshop', description: 'Explore your creativity with guidance from local artists.', date: '10/25/2024', time: '1:00 PM - 3:00 PM', location: 'Honolulu Library' },
      { id: 3, title: 'Parenting Support Group', description: 'Connect with other parents and share experiences.', date: '10/25/2024', time: '4:00 PM - 5:30 PM', location: 'Honolulu Library' },
      { id: 4, title: 'Evening Yoga Class', description: 'A gentle yoga session to wind down the day.', date: '10/25/2024', time: '6:00 PM - 7:00 PM', location: 'Honolulu Library' },
      { id: 5, title: 'Digital Skills Workshop', description: 'Learn essential computer skills in a free workshop.', date: '10/26/2024', time: '2:00 PM - 4:00 PM', location: 'Maui Community Center' },
      { id: 6, title: 'Senior Tech Help', description: 'Tech assistance for seniors to learn smartphone basics.', date: '10/26/2024', time: '10:00 AM - 11:30 AM', location: 'Maui Community Center' },
      { id: 7, title: 'Job Interview Workshop', description: 'Tips and practice for successful job interviews.', date: '10/26/2024', time: '12:00 PM - 1:30 PM', location: 'Maui Community Center' },
      { id: 8, title: 'Music Therapy Session', description: 'Relax with guided music therapy.', date: '10/26/2024', time: '5:00 PM - 6:00 PM', location: 'Maui Community Center' },
      { id: 9, title: 'Online Safety Workshop', description: 'Learn how to stay safe online and protect your personal information.', date: '10/27/2024', time: '1:00 PM - 3:00 PM', location: 'Waikiki Library' },
      { id: 10, title: 'Photography Basics', description: 'Learn the basics of photography with your smartphone.', date: '10/27/2024', time: '10:00 AM - 12:00 PM', location: 'Waikiki Library' },
      { id: 11, title: 'Job Application Workshop', description: 'Get assistance filling out job applications.', date: '10/27/2024', time: '3:30 PM - 5:00 PM', location: 'Waikiki Library' },
      { id: 12, title: 'Movie Night', description: 'Enjoy a family-friendly movie screening.', date: '10/27/2024', time: '6:00 PM - 8:00 PM', location: 'Waikiki Library' },
      { id: 13, title: 'Resume Building Session', description: 'Get help creating or updating your resume with one-on-one assistance.', date: '10/28/2024', time: '11:00 AM - 1:00 PM', location: 'Kailua Community Center' },
      { id: 14, title: 'Coding Basics Workshop', description: 'Introduction to coding for beginners.', date: '10/28/2024', time: '10:00 AM - 12:00 PM', location: 'Kailua Community Center' },
      { id: 15, title: 'Nutrition for Families', description: 'Learn tips on how to keep your family healthy and happy.', date: '10/28/2024', time: '1:30 PM - 2:30 PM', location: 'Kailua Community Center' },
      { id: 16, title: 'Evening Meditation Session', description: 'Join us for a guided meditation to relax and unwind.', date: '10/28/2024', time: '5:00 PM - 6:00 PM', location: 'Kailua Community Center' },
      { id: 17, title: 'Job Application Workshop', description: 'Receive guidance on job applications and learn about job search resources.', date: '10/29/2024', time: '9:00 AM - 11:00 AM', location: 'Hilo Public Library' },
      { id: 18, title: 'Financial Literacy Class', description: 'An introductory class on budgeting and managing finances.', date: '10/29/2024', time: '3:00 PM - 5:00 PM', location: 'Pearl City Civic Center' },
      { id: 19, title: 'Language Exchange Meetup', description: 'Practice a new language with native speakers.', date: '10/29/2024', time: '6:00 PM - 7:30 PM', location: 'Hilo Public Library' },
      { id: 20, title: 'Basic Coding Workshop', description: 'Learn the basics of coding in this beginner-friendly workshop.', date: '10/29/2024', time: '10:00 AM - 12:00 PM', location: 'Kona Innovation Center' },
      { id: 21, title: 'Intro to Social Media', description: 'Learn the basics of using social media safely and effectively.', date: '11/3/2024', time: '9:00 AM - 10:00 AM', location: 'Honolulu Library' },
      { id: 22, title: 'Beginner Excel Workshop', description: 'An introduction to using Excel for data organization and calculations.', date: '11/3/2024', time: '10:30 AM - 11:30 AM', location: 'Honolulu Library' },
      { id: 23, title: 'Email Essentials', description: 'Learn how to create, send, and organize emails efficiently.', date: '11/3/2024', time: '12:00 PM - 1:00 PM', location: 'Honolulu Library' },
      { id: 24, title: 'Networking for Success', description: 'Learn networking strategies to build professional connections.', date: '11/3/2024', time: '6:00 PM - 7:00 PM', location: 'Honolulu Library' }
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
        date: day.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }),
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
        
      </nav>

      <div className="event-list-container">
        <EventList selectedDay={selectedDay} events={events} days={days} />
      </div>
    </div>
  );
};

export default Home;