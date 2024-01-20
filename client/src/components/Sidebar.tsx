import { Logo, profile } from '@/constant/Images';
import { MessageCircleMore, Phone, Users, Settings } from '@/constant/Icons';
import { useAppSelector, useAppDispatch } from '@/hooks/useAppState';
import { changeIconState } from '@/app/features/global.slice';
import { Dispatch } from 'redux';
import { Switch } from '@/components';
import { useTheme } from '@/hooks/useThemeMode';

interface IconsWrapperProps {
  icons: React.ReactNode;
  id: 'message' | 'phone' | 'users' | 'setting';
  selected: boolean;
  setSelected: Dispatch;
}

const IconsWrapper: React.FC<IconsWrapperProps> = ({
  icons,
  id,
  selected,
  setSelected,
}) => {
  const handleClick = () => setSelected(changeIconState(id));

  return (
    <div
      className={`p-4 hover:bg-blue-600 rounded-md hover:text-white transition duration-200 cursor-pointer my-2  ${
        selected ? 'bg-blue-600 text-white' : 'bg-gray-100/50 dark:bg-black26'
      }`}
      onClick={handleClick}
    >
      {icons}
    </div>
  );
};

const Sidebar = () => {
  const { sidebar } = useAppSelector((state) => state.globalState);
  const dispatch = useAppDispatch();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    }
    if (theme === 'light') {
      setTheme('dark');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen p-4 border border-r-[1px] border-r-gray-200 dark:border-r-gray-600 dark:bg-black20'>
      <div className='flex items-center justify-between flex-col h-full p-2'>
        <div className='flex items-center flex-col'>
          <img src={Logo} alt='Chatify Logo' />
          <div className='flex items-center flex-col'>
            <IconsWrapper
              icons={<MessageCircleMore />}
              id='message'
              selected={sidebar.iconState === 'message'}
              setSelected={dispatch}
            />
            <IconsWrapper
              icons={<Phone />}
              id='phone'
              selected={sidebar.iconState === 'phone'}
              setSelected={dispatch}
            />
            <IconsWrapper
              icons={<Users />}
              id='users'
              selected={sidebar.iconState === 'users'}
              setSelected={dispatch}
            />
            <IconsWrapper
              icons={<Settings />}
              id='setting'
              selected={sidebar.iconState === 'setting'}
              setSelected={dispatch}
            />
          </div>
        </div>

        <div className='flex items-center flex-col'>
          <Switch
            checked={theme != 'light'}
            onCheckedChange={toggleTheme}
            className='my-4'
          />
          <div className='overflow-hidden rounded-full w-16 h-16'>
            <img src={profile} alt='User Profile' />
            SwitchSwitch
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
