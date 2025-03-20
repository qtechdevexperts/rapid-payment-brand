import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import style from './index.module.scss';

interface LinkTagProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  href?: string;
  className?: string;
}

const LinkTag = ({
  href = '',
  className = '',
  children,
  ...props
}: LinkTagProps) => {
  return (
    <Link href={href} {...props} className={clsx(className, style.linkTag)}>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="35"
        viewBox="0 0 34 35"
        fill="none"
      >
        <path
          d="M19.0817 12.1995C18.6667 11.7846 18.6667 11.1119 19.0817 10.6969C19.4966 10.282 20.1693 10.282 20.5843 10.6969L26.2509 16.3636C26.6659 16.7785 26.6659 17.4513 26.2509 17.8662L20.5843 23.5329C20.1693 23.9478 19.4966 23.9478 19.0817 23.5329C18.6667 23.1179 18.6667 22.4452 19.0817 22.0303L22.9345 18.1774H9.20798C8.62118 18.1774 8.14548 17.7017 8.14548 17.1149C8.14548 16.5281 8.62118 16.0524 9.20798 16.0524H22.9345L19.0817 12.1995Z"
          fill="#1C2630"
        />
      </svg>
    </Link>
  );
};

export default LinkTag;
