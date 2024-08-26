import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Col, Row } from 'react-bootstrap';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  const getSearchContact = event => {
    event.preventDefault();
    dispatch({ type: 'SEARCH_CONTACT', payload: { keyword } });
    setKeyword('');
  };

  const activeEnter = event => {
    if (event.key === 'Enter') {
      getSearchContact(event); // 이벤트 객체를 getSearchContact에 전달합니다.
    }
  };

  return (
    <Form onSubmit={getSearchContact}>
      <Row className='search-box'>
        <Col lg={6} className='margin-bottom'>
          <Form.Control
            type='text'
            placeholder='이름을 입력해주세요'
            value={keyword}
            onChange={event => setKeyword(event.target.value)}
            onKeyDown={event => activeEnter(event)}
          />
        </Col>
        <Col lg={2} className='margin-bottom'>
          <Button variant='warning' type='submit'>
            검색
          </Button>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
