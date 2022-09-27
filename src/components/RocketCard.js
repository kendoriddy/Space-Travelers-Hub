import React from 'react';
import imageUse from '../assets/images/planet.png';

const RocketCard = () => (
  <div>
    <div className="card">
      <img src={imageUse} alt="card-img" />
      <div className="card-body">
        <h3>Falcon 1</h3>
        <p maxLength="350">The Falcon is a way an expandable launch sytem privately developed and manafactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 balance the first developed liquid-fuel launch vehicle to go into orbit around the Earth.</p>
        <button className="btn-reserve" type="button">Reserve Rocket</button>
      </div>
    </div>
  </div>
);

export default RocketCard;
