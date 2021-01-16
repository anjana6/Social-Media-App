import React, { useState } from 'react';

import SideBar from '../views/userprofile/Sidebar';
import ChatBar from '../views/userprofile/ChatBar';
import Posts from '../views/userprofile/Posts';
import ChatBox from '../views/userprofile/ChatBox';
const UserProfile = () => {
  const [state, setState] = useState(false);
  const [current, setCurrent] = useState({});

  const openChat = (user) => {
    setState(true);
    setCurrent(user);
  };
  const closeChat = () => {
    setState(false);
  };

  return (
    <div className='facebook'>
      <SideBar />
      <Posts />
      <ChatBar openChat={openChat} />
      <ChatBox state={state} current={current} closeChat={closeChat} />
    </div>
  );
};

export default UserProfile;
