import clsx from 'clsx';
import React from 'react';
import Button, { ButtonProps } from '..';

interface CtaButtonProps extends ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const CtaButton = ({
  iconLeft,
  children = 'Talk To an Expert',
  className,
  iconRight,
  onClick,
  disabled,
  ...props
}: CtaButtonProps) => {
  return (
    <Button
      iconLeft={iconLeft}
      disabled={disabled}
      iconRight={iconRight}
      onClick={onClick}
      className={clsx('btn btn-feature', className)}
    >
      {children}
    </Button>
  );
};

export default CtaButton;
