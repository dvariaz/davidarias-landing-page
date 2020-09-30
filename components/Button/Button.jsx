import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const Button = React.forwardRef(({ type, href, target, children }, ref) => {
    let styleType;

    switch (type) {
        case "light": {
            styleType = styles.light;
            break;
        }
        case "solid": {
            styleType = styles.solid;
            break;
        }
        default:
            styleType = styles.solid;
    }
    return (
        <a href={href} target={target} className={`${styles.button} ${styleType}`} ref={ref}>
            {children}
        </a>
    );
});

Button.propTypes = {};

export default Button;
