import React from 'react';
import '../css/mission.css';

const MissionCard = ({
  key, id, name, discription,
}) => {
  <div className="mission-card" key={key}>
    <div className="card" id={id}>
      <div className="card-heading">
        <h3>Mission</h3>
        <h3>Description</h3>
        <h3>Status</h3>
      </div>
      <div className="card-body">
        <ul>
          <li><h2>{name}</h2></li>
          <li><p maxLength="700">{discription}</p></li>
          <li><button type="button">NOT A MEMBER</button></li>
          <li><button type="button">jOIN MISSION</button></li>
        </ul>
      </div>
    </div>
  </div>;
};

export default MissionCard;
