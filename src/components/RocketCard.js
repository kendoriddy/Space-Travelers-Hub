import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const RocketCard = ({
  id, img, name, description, reserved, bookingHandler,
}) => (
  <div className="container">
    <div className="rocketBody">
      <div className="rocketImage">
        <img src={img} alt="" />
      </div>
      <div className="rocketDescription">
        <h1>{name}</h1>
        <p>
          {reserved ? (
            <>
              <Badge bg="primary">Reserved</Badge>
              <span />
            </>
          ) : (
            <></>
          )}
          {description}
        </p>
        {reserved ? (
          <Button
            variant="primary"
            className="btn btn-cancel-reserve width-20vw back-color-gray"
            onClick={() => bookingHandler(id)}
            id={id}
          >
            Cancel Reservation
          </Button>
        ) : (
          <Button
            variant="primary"
            className="btn btn-reserve width-20vw"
            onClick={() => bookingHandler(id)}
            id={id}
          >
            Reserve Rocket
          </Button>
        )}
      </div>
    </div>
  </div>
);
RocketCard.propTypes = {
  id: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  img: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
  bookingHandler: PropTypes.func.isRequired,
};
RocketCard.defaultProps = {
  reserved: false,
};

export default RocketCard;
