import Link from "next/link";
import PropTypes from "prop-types";

import styles from "./Navbar.module.scss";

const Navbar = ({ sections }) => {
    return (
        <nav className={styles.bar}>
            <div className={styles.content}>
                <Link href="/">
                    <a className={styles.brand}>
                        <img
                            src="/assets/logos/davidarias_logo.svg"
                            alt="Logo David Arias"
                            className={styles.logo_image}
                        />
                        <span className={styles.logo_text}>David Arias</span>
                    </a>
                </Link>
                <ul className={styles.sections}>
                    {sections.map((section) => (
                        <a href={`#${section.id}`} key={section.id} className={styles.link}>
                            {section.name}
                        </a>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, name: PropTypes.string })),
};

export default Navbar;
