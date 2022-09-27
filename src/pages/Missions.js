import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import setMission from '../redux/mission/MissionAction';
import MissionCard from '../components/MissionCard';

const Missions = () => {
  // const missions = useSelector((state) => state.mission);
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
  return (
    <div>
      <MissionCard />
    </div>
  );
};

export default Missions;
