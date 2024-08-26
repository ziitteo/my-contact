import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profileImage, setProfileImage] = useState('https://thumb.mtstarnews.com/06/2024/07/2024070506520131994_1.jpg');
  const dispatch = useDispatch();

  const addContact = event => {
    event.preventDefault();
    if (name && phoneNumber) {
      dispatch({ type: 'ADD_CONTACT', payload: { name, phoneNumber, profileImage } });
      setName('');
      setPhoneNumber('');
      setProfileImage('https://thumb.mtstarnews.com/06/2024/07/2024070506520131994_1.jpg');
    } else {
      if (window.confirm('이름과 전화번호를 입력해주세요.')) {
        // 사용자가 확인을 누르면 다른 작업을 수행할 수 있습니다.
      }
    }
  };

  const handleImageChange = event => {
    const file = event.target.files && event.target.files[0]; // 파일이 존재하는지 확인
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // 이미지 데이터를 상태에 설정
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='contact-form'>
      <Form onSubmit={addContact}>
        <Form.Group className='mb-3 ' controlId='formPorofileImage'>
          <Form.Label>Profile Image</Form.Label>
          <div className='profile-image-group'>
            <div className='add-img'>
              <img src={profileImage} alt='profile-img' />
            </div>
            <Form.Control type='file' accept='image/*' onChange={handleImageChange} />
          </div>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Label>이름</Form.Label>
          <Form.Control
            type='text'
            placeholder='이름을 입력해주세요'
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formContact'>
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type='number'
            placeholder='전화번호를 입력해주세요'
            value={phoneNumber}
            onChange={event => setPhoneNumber(event.target.value)}
            className='form-phone-number'
          />
        </Form.Group>
        <Button variant='warning' type='submit'>
          추가
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
