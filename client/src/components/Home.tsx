import { useState, useEffect } from 'react';
import './css/Home.css'; 

const Home = () => {
  const [locations, setLocations] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  useEffect(() => {
    const testLocations = ['Honolulu', 'Kailua', 'Maui', 'Pearl City'];
    setLocations(testLocations);
  }, []);
    
  return (
    <div className="home-container">

      <div className='welcome-container'>
      
      </div>

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

    </div>
  );
};

export default Home;