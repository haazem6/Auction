import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function TotalAvatars() {
  return (
    
    <AvatarGroup total={24}>
      <Avatar alt="Remy Sharp" src="./user1.jpg" />
      <Avatar alt="Travis Howard" src="./user2.jpg" />
      <Avatar alt="Agnes Walker" src="./user3.jpg" />
      <Avatar alt="Trevor Henderson" src="./user4.jpg" />
    </AvatarGroup>
    
  );
}