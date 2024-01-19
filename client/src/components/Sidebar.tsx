import { Logo, profile } from '@/constant/Images';
import { MessageCircleMore, Phone, Users, Settings } from '@/constant/Icons';
import { useState } from 'react';

interface IconsWrapperProps {
  icons: React.ReactNode;
  id: 'message' | 'phone' | 'users' | 'setting';
  selected: boolean;
  setSelected: (id: 'message' | 'phone' | 'users' | 'setting') => void;
}

const IconsWrapper: React.FC<IconsWrapperProps> = ({
  icons,
  id,
  selected,
  setSelected,
}) => {
  const handleClick = () => setSelected(id);

  return (
    <div
      className={`p-4 hover:bg-blue-600 rounded-md hover:text-white transition duration-200 cursor-pointer my-2 ${
        selected ? 'bg-blue-600 text-white' : ''
      }`}
      onClick={handleClick}
    >
      {icons}
    </div>
  );
};

const Sidebar = () => {
  const [selected, setSelected] = useState<
    'message' | 'phone' | 'users' | 'setting'
  >('message');

  return (
    <div className='flex flex-col items-center justify-center h-screen p-4 border border-r-2 border-r-gray-600'>
      <div className='flex items-center justify-between flex-col h-full p-2'>
        <div className='flex items-center flex-col'>
          <img src={Logo} alt='Chatify Logo' />
          <div className='flex items-center flex-col'>
            <IconsWrapper
              icons={<MessageCircleMore />}
              id='message'
              selected={selected === 'message'}
              setSelected={setSelected}
            />
            <IconsWrapper
              icons={<Phone />}
              id='phone'
              selected={selected === 'phone'}
              setSelected={setSelected}
            />
            <IconsWrapper
              icons={<Users />}
              id='users'
              selected={selected === 'users'}
              setSelected={setSelected}
            />
            <IconsWrapper
              icons={<Settings />}
              id='setting'
              selected={selected === 'setting'}
              setSelected={setSelected}
            />
          </div>
        </div>

        <div className='flex items-center flex-col'>
          <div className='overflow-hidden rounded-full w-16 h-16'>
            <img src={profile} alt='User Profile' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
