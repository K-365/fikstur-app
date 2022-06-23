import React, { useState } from 'react';
import '../App.css';
import Leagues from './Leagues';
import Fikstur from './Fikstur';

const Content = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="content-container">
      <div className="switch">
        <div className="sw-ligler" onClick={() => setActive(true)}>
          <h2 style={{ color: active ? 'black' : null }}>Ligler</h2>
        </div>
        <div className="sw-fikstur" onClick={() => setActive(false)}>
          <h2 style={{ color: !active ? 'black' : null }}>Fikstür</h2>
        </div>
      </div>

      {active ? <Leagues /> : <Fikstur />}
    </div>
  );
};

export default Content;
