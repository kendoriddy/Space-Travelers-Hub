import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import '../css/mission.css';

const MissionCard = ({
  id, join, name, description, joinHandler,
}) => (

  <div className="card-body">
    <ul>
      <li><h2>{name}</h2></li>
      <li><p maxLength="700">{description}</p></li>
      <li className="btn-center">
        {
            join ? (<Badge bg="primary">Active Member</Badge>) : (<Badge bg="secondary">NOT MEMBER</Badge>)
            }
      </li>
      <li className="btn-center">
        {join ? (
          <Button
            variant="outline-danger"
            onClick={() => joinHandler(id)}
            id={id}
          >
            Leave Mission
          </Button>
        ) : (
          <Button
            variant="outline-secondary"
            onClick={() => joinHandler(id)}
            id={id}
          >
            Join Mission
          </Button>
        )}
      </li>
    </ul>
  </div>
);

MissionCard.propTypes = {
  id: PropTypes.string.isRequired,
  join: PropTypes.bool,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joinHandler: PropTypes.func.isRequired,
};

MissionCard.defaultProps = {
  join: false,
};

export default MissionCard;
