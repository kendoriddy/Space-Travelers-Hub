import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import setMission, { joinMission } from '../redux/mission/MissionAction';
import MissionCard from '../components/MissionCard';
import '../css/mission.css';

const Missions = () => {
  const missions = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  const fetchMissions = async () => {
    const response = await axios
      .get('https://api.spacexdata.com/v3/missions');
    dispatch(setMission(response.data));
  };

  useEffect(() => {
    fetchMissions();
  }, []);

  const joiningHandler = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <div>
      <div className="mission-card">
        <div className="card">
          <div className="card-heading">
            <h4 className="first">Mission</h4>
            <h4>Description</h4>
            <h4 className="end">Status</h4>
          </div>
          {
       missions && missions.map((mission) => (
         <MissionCard
           key={mission.mission_id}
           id={mission.mission_id}
           join={mission.join}
           name={mission.mission_name}
           description={mission.description}
           joinHandler={joiningHandler}
         />
       ))
      }
        </div>
      </div>
    </div>
  );
};

export default Missions;
