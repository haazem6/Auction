import React from 'react';
import './Information.css';

import { FiMessageCircle } from "react-icons/fi";
import TotalAvatars from './TotalAvatars'


function Information() {
  return (
    
    <div className="containerr4">
      <div div className="info">
          <FiMessageCircle></FiMessageCircle> </div>
          <div className="Avatars">
     <TotalAvatars></TotalAvatars> 
    </div>
     
    </div>
  );
}

export default Information;