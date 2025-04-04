import React from 'react'
import style from "./index.module.scss"
import Button, { ButtonProps } from '..'
import clsx from 'clsx'

interface CtaButtonProps extends ButtonProps {
    onClick?: () => void
    disabled?: boolean
    children?: React.ReactNode
    className?: string
}


const CtaButton = ({ iconLeft, children = "Talk To an Expert", className, iconRight, onClick, disabled, ...props }: CtaButtonProps) => {





    return (
        <Button iconLeft={iconLeft} disabled={disabled} iconRight={iconRight} onClick={onClick} className={clsx('btn btn-feature', style.ctaButton, className)}>{children}</Button>
    )
}

export default CtaButton