import React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button = ({
  onClick,
  children,
  iconLeft,
  iconRight,
  className,
  disabled,
  type,

  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} d-flex  justify-content-lg-center justify-content-between align-items-center gap-3 `}
      disabled={disabled}
      type={type}
      {...props}
    >
      {iconLeft && iconLeft}
      {children}
      {iconRight && iconRight}
    </button>
  );
};

export default Button;
