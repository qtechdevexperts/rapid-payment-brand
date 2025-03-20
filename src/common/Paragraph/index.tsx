import React, { forwardRef, HTMLAttributes, useEffect, useState } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    variant?: 'sm' | 'md';
    update?: string;
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
    ({ className, variant = 'sm', update, children, ...props }, ref) => {

        const [processedChildren, setProcessedChildren] = useState(children);

        useEffect(() => {
            if (window.innerWidth < 1500 && typeof children === 'string') {
                const cleaned = children.replace(/<br\s*\/?>/gi, '');
                console.log(cleaned);
                setProcessedChildren(cleaned);
            } else {
                setProcessedChildren(children);
            }
        }, [children]);

        if (typeof processedChildren === 'string') {
            return (
                <p
                    ref={ref}
                    className={clsx(style.paragraph, className)}
                    data-variant={variant}
                    {...props}
                    dangerouslySetInnerHTML={{ __html: processedChildren }}
                />
            );
        }
        return (
            <p
                ref={ref}
                className={clsx(style.paragraph, className)}
                data-variant={variant}
                {...props}
            >
                {processedChildren}
            </p>
        );
    }
);

Paragraph.displayName = 'Paragraph';

export default Paragraph;
