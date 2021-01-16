import React from 'react';
import im from '../../assets/ellon.jpg';
const ChatBar = (props) => {
  const [state, setState] = React.useState([
    { id: 1, image: '/images/ellon.jpg', name: 'Fawad Khan' },
    { id: 2, image: '/images/ellon.jpg', name: 'Aasad Khan' },
    { id: 3, image: '/images/ellon.jpg', name: 'Kamran Khan' },
    { id: 4, image: '/images/ellon.jpg', name: 'Javed Khan' },
    { id: 5, image: '/images/ellon.jpg', name: 'Fazal Khan' },
    { id: 6, image: '/images/ellon.jpg', name: 'Rahim Khan' },
    { id: 6, image: '/images/ellon.jpg', name: 'Imran Khan' },
    { id: 7, image: '/images/ellon.jpg', name: 'Saeed Khan' },
    { id: 8, image: '/images/ellon.jpg', name: 'Bilal Khan' },
    { id: 9, image: '/images/ellon.jpg', name: 'Umer Khan' },
    { id: 10, image: '/images/ellon.jpg', name: 'Usman Khan' },
  ]);
  const openChat = (user) => {
    props.openChat(user);
  };
  return (
    <div className='chatBar'>
      {state.map((user) => (
        <div
          className='chatBar__list'
          key={user.id}
          onClick={() => openChat(user)}
        >
          <div className='chatBar__list-img'>
            <img src={user.image} alt='user' />
            <span className='status'></span>
          </div>
          <div className='chatBar__list-name'>{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBar;
