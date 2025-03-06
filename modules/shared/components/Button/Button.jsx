import clsx from "clsx";
import React from "react";

const Button = React.forwardRef(
    ({ type, href, target, children, prefix, className }, ref) => {
        let styleType;

        switch (type) {
            case "light": {
                styleType = "bg-white/10 hover:bg-white/15 rounded-full";
                break;
            }
            case "solid": {
                styleType = "bg-primary-500 hover:bg-primary-400 main-text";
                break;
            }
            default:
                styleType = "bg-primary-500 hover:bg-primary-400 main-text";
        }

        return (
            <a
                href={href}
                target={target}
                className={clsx("text-white whitespace-nowrap inline-flex justify-center items-center", styleType, className)}
                ref={ref}
            >
                {prefix && <img src={prefix} className="mr-4 h-6" />}
                {children}
            </a>
        );
    }
);

export default Button;
