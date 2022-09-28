import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const Rockets = rockets.filter((rock) => rock.reserved);
  return (
    <>
      <div className="profile">
        <div className="profile-missions">
          <h2>My Missions</h2>
          <div className="mission-group">Missions</div>
        </div>
        <div className="profile-rockets">
          <h2>My Rockets</h2>
          <ListGroup>
            {Rockets.map(((element) => (
              <ListGroup.Item key={element.rockets}>{element.rocket_name}</ListGroup.Item>
            )))}
          </ListGroup>
        </div>
      </div>
    </>
  );
};

export default Profile;
