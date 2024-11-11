import React, { useState } from 'react';
import SignUpForm from './SignUp';
import './css/EventDetails.css';

interface EventDetailProps {
  event: Event;
  onBack: () => void;
}

const EventDetail: React.FC<EventDetailProps> = ({ event, onBack }) => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
  };

  const handleFormSubmit = (formData: { name: string; email: string }) => {
    console.log('Form submitted:', formData);
    setShowSignUpForm(false);
  };

  const handleCancel = () => {
    setShowSignUpForm(false);
  };

  return (
    <div className='event-detail-container'>
      <button onClick={onBack}>Back to Events</button>
      {showSignUpForm ? (
        <SignUpForm onSubmit={handleFormSubmit} onCancel={handleCancel} />
      ) : (
        <>
          <h2>{event.title}</h2>
          <p>{event.time}</p>
          <p>{event.location}</p>
          <p>{event.description}</p>
          <button onClick={handleSignUpClick}>Sign Up</button>
        </>
      )}
    </div>
  );
};

export default EventDetail;
