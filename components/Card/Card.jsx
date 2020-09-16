import React from "react";
import PropTypes from "prop-types";

import styles from "./Card.module.scss";

import ProgressBar from "@components/ProgressBar";

const Card = ({ name, title, profile, items }) => {
    return (
        <div className={styles.body}>
            {title && <h1 className={styles.title}>{title}</h1>}
            {name && <h2 className={styles.subtitle}>{name}</h2>}
            {profile && (
                <picture>
                    <source media="(min-width: 1024px)" srcSet={profile.large} />
                    <source srcSet={profile.medium} />
                    <img src={profile.medium} alt={name} />
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
        </div>
    );
};

Card.propTypes = {};

export default Card;
