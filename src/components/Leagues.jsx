import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css';

const Leagues = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://api-football-standings.azharimm.site/leagues')
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(datas);
  return (
    <div className="lig-container">
      {datas.map((data) => (
        <div key={data.id} className="lig-div">
          <img
            id={data.slug}
            src={data.logos.dark}
            alt=""
            style={{ height: '100px' }}
          />
          <h1>{data.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Leagues;
