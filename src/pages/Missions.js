import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import setMission from '../redux/mission/MissionAction';

const Missions = () => {
  const missions = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  const fetchMissions = async () => {
    const response = await axios
      .get('https://api.spacexdata.com/v3/missions')
      .catch((err) => {
        console.log('Err', err);
      });
    dispatch(setMission(response.data));
  };

  useEffect(() => {
    fetchMissions();
  }, []);
  console.log('Missions:', missions);
  return (
    <div>
      <h1>Missions!!!</h1>
    </div>
  );
};

export default Missions;
