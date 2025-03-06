import clsx from "clsx";
import PropTypes from "prop-types";

import ProgressBar from "@/modules/shared/components/ProgressBar";

const SkillCard = ({ type, title, subtitle, profile, items, icon, date, duration, loading, className }) => {
    return (
        <div className={clsx("bg-white/5 w-full flex flex-col rounded-xl p-4 relative light-text text-sm", className)}>
            {title && <h3 className="main-text text-lg mb-2">{title}</h3>}
            {subtitle && (
                <h4 className={"relative text-center w-full px-12 light-text"}>
                    {icon && <img src={icon} className="w-[25px] h-[25px] rounded-full" />}
                    {subtitle}
                </h4>
            )}
            {profile && (
                <div className="my-4 flex">
                    <picture className="mx-auto rounded-full w-[200px] h-[200px]">
                        <source media="(min-width: 1024px)" srcSet={profile.large} />
                        <source srcSet={profile.medium} />
                        <img src={profile.medium} alt="" className="mx-auto rounded-full self-center w-[200px] h-[200px]" />
                    </picture>
                </div>
            )}
            <ul className="w-full">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center w-full my-4">
                        <div className="flex items-center">
                            {item.prefix && (
                                <div className="block mr-4 w-[25px] h-[25px]">
                                    <img
                                        src={item.prefix}
                                        alt={item.name}
                                        className="w-full h-full object-contain" />
                                </div>
                            )}
                            {item.name}
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

SkillCard.propTypes = {
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

export default SkillCard;
