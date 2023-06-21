import { Link } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux.ts';
import { headerSlice } from '../../../../store/reducers/headerSlice.ts';
import { AiOutlineHome } from 'react-icons/ai';
import { RiCalendarTodoFill } from 'react-icons/ri';
import { BsClipboardCheck } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosTimer } from 'react-icons/io';

const Menu: FC = () => {
  const menuActive = useAppSelector(state => state.header);
  const { setMenuActive } = headerSlice.actions;
  const dispatch = useAppDispatch();

  const menuItems = [
    { id: nanoid(), value: 'Home', href: '/', icon: <AiOutlineHome /> },
    {
      id: nanoid(),
      value: 'Task List',
      href: '/tasks',
      icon: <BsClipboardCheck />,
    },
    {
      id: nanoid(),
      value: 'Board',
      href: '/board',
      icon: <RiCalendarTodoFill />,
    },
    {
      id: nanoid(),
      value: 'Timer',
      href: '/timer',
      icon: <IoIosTimer />,
    },
  ];

  useEffect(() => {
    document.documentElement.style.overflow = menuActive ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [menuActive]);

  return (
    <div
      className={`fixed h-[100rem] w-screen z-50 transform transition duration-500 shadow-md translate-y-[-4%] ${
        menuActive ? 'translate-x-[0%]' : 'translate-x-[-100%]'
      }`}
      onClick={() => dispatch(setMenuActive(false))}
    >
      <div
        className="w-1/3 h-full bg-zinc-800 text-white flex flex-col text-center max-md:w-full"
        onClick={e => e.stopPropagation()}
      >
        <span
          className="cursor-pointer absolute left-2 top-3 hover:opacity-50"
          onClick={() => dispatch(setMenuActive(!menuActive))}
        >
          <AiOutlineClose size={55} />
        </span>
        <div className="p-7 text-6xl w-full mt-10">Task Flow</div>
        <ul
          className="flex flex-col mx-auto gap-5 text-3xl w-max"
          onClick={() => dispatch(setMenuActive(false))}
        >
          {menuItems.map(item => (
            <li className="flex items-center gap-2" key={item.id}>
              <Link className="flex items-center gap-2" to={item.href}>
                <span className="flex items-center gap-2 hover:opacity-50">
                  {item.icon}
                  {item.value}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
