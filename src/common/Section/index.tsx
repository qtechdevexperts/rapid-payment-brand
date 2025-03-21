import clsx from 'clsx';
import React from 'react';
import style from './index.module.scss';

interface SectionProps extends React.HTMLAttributes<HTMLElement> { }

const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section className={clsx(style.section, className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
