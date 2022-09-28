import React from 'react';
import { useSelector } from 'react-redux';
import '../css/mission.css';

const MissionCard = () => {
  const missions = useSelector((state) => state.mission);
  missions.forEach((element) => {
    <div className="mission-card">
      <div className="card">
        <div className="card-heading">
          <h3>Mission</h3>
          <h3>Description</h3>
          <h3>Status</h3>
        </div>
        <div className="card-body">
          <ul>
            <li><h2>{element.mission_name}</h2></li>
            <li><p maxLength="700">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></li>
            <li><button type="button">NOT A MEMBER</button></li>
            <li><button type="button">jOIN MISSION</button></li>
          </ul>
        </div>
      </div>
    </div>;
  });
};

export default MissionCard;
