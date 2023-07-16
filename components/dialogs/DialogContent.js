import React from "react";

export default function DialogContent({className,children,isFull}) {
    return (
        <div className={`${isFull?"px-6 overflow-y-scroll":"border-y "}  py-3 border-outline-variant-light dark:border-outline-variant-dark  ${className}`}>
            {children}
        </div>
    )
}
