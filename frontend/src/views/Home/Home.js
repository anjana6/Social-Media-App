import React from 'react';
import uok from '../../assets/uok.jpg';

const Home = () => {
  return (
    <div>
      <div className='home-container'>
        <img src={uok} alt='uok logo' style={{ width: '100%' }} />
      </div>
      <div className='home-histry'></div>
      <div>
        <div className='home-vishion'></div>
        <div className='home-mission'></div>
      </div>
    </div>
  );
};

export default Home;
