import Sidebar from '@/components/Sidebar';
import React from 'react';

const Desktop = () => {
  return (
    <div className='flex flex-row h-screen'>
      {/* sidebar */}
      <div className='flex-[.5]'>
        <Sidebar />
      </div>
      {/* chats */}
      <div className='bg-purple-600 flex-[3]'>chats</div>
      {/* message area */}
      <div className='bg-blue-600 flex-[5]'>message area</div>
    </div>
  );
};

export default Desktop;
