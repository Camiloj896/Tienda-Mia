import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

import './style.scss';

const View = (props) => {

  return (
    <div>
      <table className="view-info">
        <tbody>
          <tr>
            <td>Cliente:</td>
            <td className="text-right text-secondary">{props?.cliente}</td>
          </tr>
          <tr>
            <td>ShippingAddress</td>
            <td className="text-right text-secondary">{props?.shippingAddress}</td>
          </tr>
          <tr>
            <td>Status:</td>
            <td className="text-right text-secondary">{props?.status?.name}</td>
          </tr>
          <tr>
            <td>Create Date:</td>            
            <td className="text-right text-secondary">{props?.createDate}</td>
          </tr>
          <tr>
            <td>ShippingPromise:</td>
            <td className="text-right text-secondary">{props?.shippingPromise}</td>
          </tr>
        </tbody>
      </table>
      <ListGroup className="mt-5">
        {props?.items?.map((item) => (
          <ListGroup.Item key={item.id}>
            <div className="item-info-content">
              <div className="item-info">
                <Image className="mr-5" src={item.url} roundedCircle />
                {item.title}
              </div>
              <div className="item-quantity text-secondary">X{item.quantity}</div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
};

export default View;