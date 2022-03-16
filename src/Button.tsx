import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import { NOOP } from './utils/function-utils';

export interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit';
  variant?: 'default' | 'error' | 'warning' | 'success';
  rightIcon?: string | React.FC;
  leftIcon?: string | React.FC;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className = '',
  children = 'Button',
  onClick = NOOP,
  type = 'button',
  variant = 'default',
  rightIcon = '',
  leftIcon = '',
  disabled = false,
}) => {
  const [bgStyles, setBgStyles] = useState('');
  const [disabledStyles, setDisabledStyles] = useState('');

  useEffect(() => {
    switch (variant) {
      case 'default':
        setBgStyles('bg-primary hover:bg-primary-900');
        setDisabledStyles('bg-primary-200 cursor-not-allowed');
        break;
      case 'success':
        setBgStyles('bg-green-600 hover:bg-green-500 focus:bg-green-700');
        setDisabledStyles('bg-green-200 cursor-not-allowed');
        break;
      case 'warning':
        setBgStyles('bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-600');
        setDisabledStyles('bg-yellow-200 cursor-not-allowed');
        break;
      case 'error':
        setBgStyles('bg-red-500 hover:bg-red-400 focus:bg-red-600');
        setDisabledStyles('bg-green-200 cursor-not-allowed');
        break;
    }
  }, [variant]);

  const buttonClassName: string = cx(
    'flex h-[56px] w-[134px] text-base items-center justify-center rounded-md font-semibold text-gray-50',
    disabled ? disabledStyles : bgStyles,
    className
  );

  return (
    <button
      disabled={disabled}
      type={type}
      className={buttonClassName}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
