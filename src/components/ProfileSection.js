import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { missions } = useSelector((state) => state.mission);
  const Missions = missions.filter((m) => m.isMember);
  const rockets = useSelector((state) => state.rockets);
  const Rockets = rockets.filter((rock) => rock.reserved);
  return (
    <>
      <div className="profile-container">
        <div className="profile-missions">
          <h2>My Missions</h2>
          <ListGroup>
            {Missions.map(((m) => (
              <ListGroup.Item key={m.mission}>{m.mission_name}</ListGroup.Item>
            )))}
          </ListGroup>
        </div>
        <div className="profile-rockets">
          <h2>My Rockets</h2>
          <ListGroup>
            {Rockets.map(((element) => (
              <ListGroup.Item key={element.id}>{element.rocket_name}</ListGroup.Item>
            )))}
          </ListGroup>
        </div>
      </div>
    </>
  );
};

export default Profile;
