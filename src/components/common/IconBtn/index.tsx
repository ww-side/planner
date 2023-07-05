import React, { FC } from 'react';

interface IIConBtnProps {
  onClick: () => void;
  icon: React.ReactNode;
}

const IconBtn: FC<IIConBtnProps> = ({ icon, onClick }) => {
  return <button onClick={onClick}>{icon}</button>;
};

export default IconBtn;
