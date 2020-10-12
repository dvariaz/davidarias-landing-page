import PropTypes from "prop-types";

import styles from "./Card.module.scss";

import ProgressBar from "../ProgressBar";

const Card = ({ type, title, subtitle, profile, items, icon, date, duration, loading }) => {
    const renderContent = () => {
        switch (type) {
            case "skill": {
                return renderSkill();
            }
            case "course": {
                return renderCourse();
            }
            default:
                return;
        }
    };

    const renderSkill = () => (
        <>
            {profile && (
                <picture>
                    <source media="(min-width: 1024px)" srcSet={profile.large} />
                    <source srcSet={profile.medium} />
                    <img src={profile.medium} alt="" />
                </picture>
            )}
            <ul className={styles.items}>
                {items.map((item, index) => (
                    <li key={index}>
                        <div className={styles.itemName}>
                            {item.prefix && (
                                <div className={styles.itemIcon}>
                                    <img src={item.prefix} alt={item.name} />
                                </div>
                            )}
                            <span>{item.name}</span>
                        </div>

                        {item.value && item.value.includes("%") ? (
                            <ProgressBar value={item.value} />
                        ) : (
                            <span>{item.value}</span>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );

    const renderCourse = () => (
        <div className={styles.timeData}>
            <span>{date}</span>
            <span>{duration}</span>
        </div>
    );

    return (
        <div className={styles.body}>
            {loading && <div className={styles.loader}></div>}
            {title && <h1 className={styles.title}>{title}</h1>}
            {subtitle && (
                <h2 className={styles.subtitle}>
                    {icon && <img src={icon} className={styles.icon} />}
                    {subtitle}
                </h2>
            )}
            {renderContent()}
        </div>
    );
};

Card.propTypes = {
    type: PropTypes.oneOf(["skill", "course"]).isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    profile: PropTypes.shape({
        large: PropTypes.string,
        medium: PropTypes.string,
        small: PropTypes.string,
    }),
    items: PropTypes.arrayOf(
        PropTypes.shape({
            prefix: PropTypes.string,
            name: PropTypes.string,
            value: PropTypes.string,
        })
    ),
    platform: PropTypes.string,
    date: PropTypes.string,
    duration: PropTypes.string,
};

export default Card;
