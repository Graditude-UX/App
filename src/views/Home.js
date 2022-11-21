import React from 'react';
// import sections
import Globe from '../components/sections/Globe';
import Posts from '../components/sections/Posts';


const Home = () => {

  return (
    <>
      <Globe className="illustration-section-01" />
      <Posts topDivider />
    </>
  );
}

export default Home;