import clsx from "clsx";
import React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    size?: "xxl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs";
    className?: string;
    children: React.ReactNode;
    Tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

const Typography = ({
    Tag = "div",
    children,
    className,
    size = "xs",
    ...props
}: TypographyProps) => {

    const sizeClasses: Record<string, string> = {
        xxl: "fs-36",
        xl: "fs-32",
        lg: "fs-28",
        md: "fs-24",
        sm: "fs-20",
        xs: "fs-16",
        xxs: "fs-12",
    };


    const sizeClassName = sizeClasses[size] || sizeClasses["xs"];

    return (
        <Tag className={clsx(className, sizeClassName)} {...props}>
            {children}
        </Tag>
    );
};

export default Typography;
