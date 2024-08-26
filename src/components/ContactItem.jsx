import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ContactItem = ({ item }) => {
  return (
    <div>
      <Row className='contact-item'>
        <Col lg={3} className='image-wrap'>
          <img className='profile-img' src={item.profileImage} alt='profile-img' />
        </Col>
        <Col lg={8}>
          <div>{item.name}</div>
          <div>{item.phoneNumber}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
