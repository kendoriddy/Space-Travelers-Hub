import React from 'react';
import { useSelector } from 'react-redux';

const RocketCard = () => {
  const rockets = useSelector((state) => state.rockets);

  const renderRocket = rockets.map((rocket) => (
    <div key={rocket.id} className="main">
      <div className="rocketImage">
        <img src={rocket.flickr_images} alt={rocket.rocket_name} />
      </div>
      <div className="rocketDescription">
        <h1>{rocket.rocket_name}</h1>
        <p>
          {rocket.description}
        </p>
        <button type="button">Reserved</button>
      </div>
    </div>
  ));

  return (
    <>{ renderRocket }</>
  );
};

export default RocketCard;
