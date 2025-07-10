import React from 'react';
import Button from '../components/Button/Button';

const ButtonGroup = () => {
  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '2rem' }}>
      <Button label="Apply Now" variant="primary" onClick={() => console.log('Apply clicked')} />
      <Button label="View Details" variant="secondary" onClick={() => console.log('Details clicked')} />
    </div>
  );
};

export default ButtonGroup;
