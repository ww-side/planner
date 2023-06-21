import { FC } from 'react';
import Menu from './Menu/Menu.tsx';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.ts';
import { headerSlice } from '../../../store/reducers/headerSlice.ts';
import { FiMenu } from 'react-icons/fi';

const Header: FC = () => {
  const menuActive = useAppSelector(state => state.header);
  const { setMenuActive } = headerSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <>
      <nav
        className="cursor-pointer w-min p-2 hover:opacity-50"
        onClick={() => dispatch(setMenuActive(!menuActive))}
      >
        <FiMenu size={50} color="white" />
      </nav>
      <Menu />
    </>
  );
};

export default Header;
