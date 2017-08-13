import React from 'react';

const HomeComponent = ({ buttonClick, params }) => {
  
  return (
    <div>
      <h2>Home Component</h2>
      <div>
        <button type="button" onClick={buttonClick}>Click</button>
      </div>
      <div><span>Setting </span><span>{params.setting}</span></div>
    </div>
  );
}

export default HomeComponent;