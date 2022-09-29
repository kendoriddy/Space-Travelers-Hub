import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import '../css/mission.css';

const MissionCard = () => {
  const missions = useSelector((state) => state.mission);
  missions.forEach((element) => {
    <Table striped bordered hover size="sm" className="missions-table ml-5">
      <thead>
        <tr>
          <th>Mission</th>
          <th className="desc">Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>{element.mission_name}</strong></td>
          <td>{element.description}</td>
          <td className="td-button">
            <h5>
              <Badge bg="secondary">NOT A MEMBER</Badge>
            </h5>
          </td>
          <td className="td-button">
            <Button variant="outline-danger">Leave Mission</Button>
          </td>
        </tr>
      </tbody>
    </Table>;
  });
};

export default MissionCard;
