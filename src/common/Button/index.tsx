import React from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    iconLeft?: React.ReactNode
    iconRight?: React.ReactNode
}




const Button = ({ onClick, children, iconLeft, iconRight, className, ...props }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`${className} d-flex  justify-content-lg-center justify-content-between align-items-center gap-3 `}
            {...props}
        >
            {iconLeft && iconLeft}
            {children}
            {iconRight && iconRight}
        </button>
    )
}

export default Button