import React from 'react';
import './DeroulementContainer.css';
import Information from './information/Information';
import UserIcon from './UserIcon/UserIcon';
import Youtube from './Youtube/Youtube'


function DeroulementContainer() {
  return (
    
  <div className="container">
    <Information />
    <UserIcon ></UserIcon>
    <Youtube></Youtube>
    
    
    </div>
    
  );
}

export default DeroulementContainer;