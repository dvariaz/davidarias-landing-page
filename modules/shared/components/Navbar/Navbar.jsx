import Link from "next/link";
import PropTypes from "prop-types";

import "./Navbar.scss";
import clsx from "clsx";

const Navbar = ({ sections, className }) => {
    return (
        <nav className={clsx("flex justify-center", className)}>
            <div className="relative w-full">
                <Link href="/" legacyBehavior>
                    <a className="main-text text-[1.2rem] absolute left-0 flex items-center w-auto h-18">
                        <img
                            src="/assets/logos/davidarias_logo.svg"
                            alt="Logo David Arias"
                            className="h-12 object-contain px-4 py-2"
                        />
                        <span className="block whitespace-nowrap">David Arias</span>
                    </a>
                </Link>

                <ul className="hidden lg:flex items-center justify-center w-full">
                    {sections.map((section) => (
                        <a
                            href={`#${section.id}`}
                            key={section.id}
                            className="navbar__link navigation-text text-sm text-center lg:min-w-[150px] px-4 py-7"
                        >
                            {section.name}
                        </a>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string, name: PropTypes.string })
    ),
};

export default Navbar;
