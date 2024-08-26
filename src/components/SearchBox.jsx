import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Col, Row } from 'react-bootstrap';

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactList);

  const getSearchContact = event => {
    if (!searchValue) {
      alert('이름을 입력해주세요');
      return;
    }
    event.preventDefault();
    dispatch({ type: 'SEARCH_CONTACT', payload: { name: searchValue } });
    setSearchValue('');
  };

  return (
    <Row className='search-box'>
      <Col lg={6} className='margin-bottom'>
        <Form.Control
          type='text'
          placeholder='이름을 입력해주세요'
          value={searchValue}
          onChange={event => setSearchValue(event.target.value)}
        />
      </Col>
      <Col lg={2} className='margin-bottom'>
        <Button variant='warning' type='button' onClick={getSearchContact}>
          검색
        </Button>
      </Col>
      <Col lg={1}></Col>
      <Col lg={3} className='margin-bottom'>
        총 인원 : {contacts.length}명
      </Col>
    </Row>
  );
};

export default SearchBox;
