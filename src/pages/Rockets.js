import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import setRocket, { bookRocket } from '../redux/rockets/RocketAction';
import RocketCard from '../components/RocketCard';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  const fetchRockets = async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets').catch((err) => {
      console.log('Err', err);
    });
    dispatch(setRocket(response.data));
    return rockets;
  };

  useEffect(() => {
    fetchRockets();
  }, []);
  
  const bookingHandler = (id) => {
    dispatch(bookRocket(id));
  };

  return (
    <div>
      {rockets
        && rockets.map((rocket) => (
          <RocketCard
            key={rocket.id}
            id={rocket.id}
            reserved={rocket.reserved}
            name={rocket.rocket_name}
            description={rocket.description}
            img={rocket.flickr_images}
            bookingHandler={bookingHandler}
          />
        ))}
    </div>
  );
};

export default Rocket;
