import React from 'react'
import style from "./index.module.scss"
import clsx from 'clsx'


interface SectionProps extends React.HTMLAttributes<HTMLElement> {

}



const Section = ({ children, className, ...props }: SectionProps) => {
    return (
        <section className={clsx(style.section, className)} {...props} >{children}</section>
    )
}

export default Section