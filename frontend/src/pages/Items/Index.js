import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import { useNavigate } from "react-router-dom";
import './style.scss';

const Items = () => {

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <section>
      <div className="title-content">
        <h2>Ordenes</h2>
        <Button variant="outline-danger" onClick={() => handleNavigate('/orders/new')}>Nuevo</Button>
      </div>
      <Card>
        <Card.Body>
          <Table responsive className="table-tm">
            <thead>
              <tr>
                <th>#</th>
                <th>Create Date</th>
                <th>Status</th>
                <th>Cliente</th>
                <th>ShippingAddress</th>
                <th>ShippingPromise</th>
                <th># items</th>                
              </tr>
            </thead>
            <tbody>
                <tr onClick={() => handleNavigate(`/home/${id}`)}>
                  <td>1</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                </tr>
              <tr>
                <td>2</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </section>
  )
};

export default Items;