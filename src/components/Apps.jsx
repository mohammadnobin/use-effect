import React, { useState, useEffect, useRef } from 'react';

const Apps = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to toggle dropdown open/close
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Add event listener for clicks outside
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      <button onClick={toggleDropdown}>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          border: '1px solid #ccc',
          backgroundColor: '#fff',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          zIndex: 1000
        }}>
          <ul style={{ listStyleType: 'none', margin: 0, padding: '10px' }}>
            <li onClick={()=> setIsOpen(false)}><a href="#option1">Option 1</a></li>
            <li onClick={()=> setIsOpen(false)}><a href="#option2">Option 2</a></li>
            <li onClick={()=> setIsOpen(false)}><a href="#option3">Option 3</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Apps;
