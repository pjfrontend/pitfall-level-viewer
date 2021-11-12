import React from 'react';
import './AtariButton.css';

export interface AtariButtonProps {
  label?: string;
  onClick?: () => void;
}

export const AtariButton = ({
  label,
  onClick = () => {},
}: AtariButtonProps): JSX.Element => {
  return (
    <div onClick={onClick} data-testid="btn" className={'atari-button'}>
      <span data-testid="txt">{label}</span>
    </div>
  );
};
