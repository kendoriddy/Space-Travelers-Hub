import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import setMission from '../redux/mission/MissionAction';
import MissionCard from '../components/MissionCard';

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
  return (
    <div>
      {
       missions && missions.map((mission) => (
         <MissionCard
           key={mission.mission_id}
           id={mission.mission_id}
           name={mission.mission_name}
           description={mission.description}
         />
       ))
      }
    </div>
  );
};

export default Missions;
