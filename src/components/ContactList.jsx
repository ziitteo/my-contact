import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';

const ContactList = () => {
  const { contactList, keyword } = useSelector(state => state);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (keyword) {
      const list = contactList.filter(item => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [contactList, keyword]);

  return (
    <div className='contact-list'>
      <SearchBox />
      <div>총 인원 : {filteredList.length}명</div>
      {filteredList.map(item => (
        <ContactItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
