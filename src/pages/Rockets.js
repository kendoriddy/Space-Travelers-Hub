import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import setRocket from '../redux/rockets/RocketAction';
import RocketCard from '../components/RocketCard';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  const fetchRockets = async () => {
    const response = await axios
      .get('https://api.spacexdata.com/v3/rockets')
      .catch(() => {
      });
    dispatch(setRocket(response.data));
    return rockets;
  };

  useEffect(() => {
    fetchRockets();
  }, []);

  return (
    <div>
      <RocketCard />
    </div>
  );
};

export default Rocket;
