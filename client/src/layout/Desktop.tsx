import React from 'react';
import { Sidebar, Chats } from '@/components';

const Desktop = () => {
  return (
    <div className='flex flex-row h-screen'>
      {/* sidebar */}
      <div className='flex-[.5]'>
        <Sidebar />
      </div>
      {/* chats */}
      <div className='flex-[3]'>
        <Chats />
      </div>
      {/* message area */}
      <div className='bg-blue-600 flex-[5]'>message area</div>
    </div>
  );
};

export default Desktop;
