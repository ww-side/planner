import { FC } from 'react';
import Menu from './Menu/Menu.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.ts';
import { headerSlice } from '../../store/reducers/headerSlice.ts';
import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';

const Header: FC = () => {
  const menuActive = useAppSelector(state => state.header);
  const { setMenuActive } = headerSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className="bg-zinc-800 shadow-md">
      <nav
        className="cursor-pointer w-min p-2"
        onClick={() => dispatch(setMenuActive(!menuActive))}
      >
        {menuActive ? (
          <AiOutlineClose size={50} color="white" />
        ) : (
          <FiMenu size={50} color="white" />
        )}
      </nav>
      <Menu />
    </div>
  );
};

export default Header;
