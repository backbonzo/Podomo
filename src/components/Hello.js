import React from 'react';
import './Hello.css';

const component = (props) => {
  const {mate} = props;

  return (
    <div>
      <h1 className="Test">This Is A Component with text that is NOT highligthable</h1>
      <p>Hello {mate}!</p>
    </div>
  );
};

export default component;