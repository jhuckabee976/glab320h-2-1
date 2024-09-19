import React from 'react';
import './Content.css';

function Content(props) {
  return (
    <div className="content-container">
      <div className="card shadow-sm">
        <div className="card-body">
          <img 
            src="https://perscholas.org/wp-content/themes/per-scholas/assets/images/logo1.svg" 
            alt="Per Scholas Logo" 
            style={{ display: 'block', margin: '1em auto', width: '150px' }}
          />
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Content;