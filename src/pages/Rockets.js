import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketFromApi } from '../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) dispatch(fetchRocketFromApi());
  }, []);

  return (
    <div className="rocket-container">
      {rockets.map((rocket) => {
        const {
          id, name, type, images,
        } = rocket;

        return (
          <div key={id} className="rocket">
            <img src={images} alt="rocket" className="rocket-image" />
            <p>{name}</p>
            <p>{type}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Rockets;
