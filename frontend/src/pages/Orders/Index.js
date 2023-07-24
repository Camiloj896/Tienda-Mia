import React from "react";
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import View from './View';
import { getOrder } from './../../services/orders';

import { useNavigate } from "react-router-dom";
import './style.scss';

const Orders = () => {

  const [show, setShow] = useState({ visible: false, data: 0});
  const [state, setState] = useState([]);

  const handleOffCanvas = (id) => {
    const auxData = state.find(obj => obj.id === id)
    setShow({
      data: auxData,
      visible: !show.visible,
    });
  }

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path); 
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOrder();
      setState(data);
    }

    fetchData();
  }, []);

  return (
    <section>
      <div className="title-content">
        <h2>Orders</h2>
        <Button variant="outline-danger" onClick={() => handleNavigate('/orders/new')}>New</Button>
        <DropdownButton
          as={ButtonGroup}
          variant='danger'
          title='Get Report'
        >
          <Dropdown.Item onClick={() => handleNavigate('/report/Approve')}>by status Approve</Dropdown.Item>
          <Dropdown.Item onClick={() => handleNavigate('/report/Traveling')}>by status Traveling</Dropdown.Item>
        </DropdownButton>
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
              {state?.map((order) => (
                <tr onClick={() => handleOffCanvas(order.id)} key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.createDate}</td>
                  <td>{order.status.name}</td>
                  <td>{order.cliente}</td>
                  <td>{order.shippingAddress}</td>
                  <td>{order.shippingPromise}</td>
                  <td>{order.items?.length}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <Offcanvas show={show.visible} onHide={handleOffCanvas} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Order Information</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <View {...show.data} />
        </Offcanvas.Body>
      </Offcanvas>
    </section>
  )
};

export default Orders;