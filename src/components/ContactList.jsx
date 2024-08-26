import React from 'react';
import { useSelector } from 'react-redux';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';

const ContactList = () => {
  const contacts = useSelector(state => state.contactList);
  return (
    <div className='contact-list'>
      <SearchBox />
      <div>총인원 : {contacts.length}명</div>
      {contacts.map(item => (
        <ContactItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
