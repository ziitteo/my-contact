const initialState = {
  contactList: [],
};

function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contactList: [
          ...state.contactList,
          { name: payload.name, phoneNumber: payload.phoneNumber, profileImage: payload.profileImage },
        ],
      };
    case 'SEARCH_CONTACT':
      return { ...state, keyword: payload.keyword };
    default:
      return { ...state };
  }
}

export default reducer;
