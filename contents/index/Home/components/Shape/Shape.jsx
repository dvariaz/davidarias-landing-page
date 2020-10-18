import { motion } from "framer-motion";
import PropTypes from "prop-types";

import styles from "./Shape.module.css";

const Shape = ({ color }) => {
    const symbolVariants = {
        visible: {
            transition: {
                staggerChildren: 0.05,
            },
        },
        hidden: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const pathVariants = {
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 80,
                duration: 0.8,
            },
        },
        hidden: {
            x: "100%",
            y: "150%",
            opacity: 0,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 80,
                duration: 0.8,
            },
        },
    };

    return (
        <div className={styles.background}>
            <svg
                viewBox="0 0 1920 1080"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                className={styles.shapes}
            >
                <defs>
                    <motion.symbol
                        initial="hidden"
                        animate="visible"
                        variants={symbolVariants}
                        id="shape"
                        strokeWidth="2"
                    >
                        <motion.path
                            initial="hidden"
                            variants={pathVariants}
                            d="M1032.1,156.7l311.6,261.4c18,15.1,20.3,41.9,5.2,59.9l0,0c-15.1,18-41.9,20.3-59.9,5.2L977.5,221.8
        c-18-15.1-20.3-41.9-5.2-59.9l0,0C987.3,143.9,1014.2,141.6,1032.1,156.7z"
                        />
                        <motion.path
                            initial="hidden"
                            variants={pathVariants}
                            d="M1199,518.6L819.6,200.3c-18.2-15.3-20.7-42.2-5.6-60.2c7.3-8.6,17.7-14,28.9-14.9c11.4-1,22.6,2.6,31.3,10
        l377.4,316.7c0.6,0.5,1.3,1,1.9,1.6c-8.4-6.3-18.9-9.3-29.4-8.4c-11.3,0.9-21.7,6.3-29,14.9C1180.8,477.4,1182.4,503.1,1199,518.6
        z"
                        />
                        <motion.path
                            initial="hidden"
                            variants={pathVariants}
                            d="M1300.4,659.2c-7.3,8.7-17.7,14-29,14.9c-11.3,0.9-22.6-2.7-31.3-10L793.6,289.4c8.6,7,19.7,10.5,30.8,9.6
        c11.3-0.9,21.7-6.3,29-14.9c14.9-17.8,12.6-44.4-5.1-59.7L1294.8,599C1313,614.2,1315.5,641.2,1300.4,659.2z"
                        />
                        <motion.path
                            initial="hidden"
                            variants={pathVariants}
                            d="M1172.5,718.3L725.7,343.4c-18.2-15.3-20.7-42.2-5.6-60.2c7.3-8.7,17.7-14,29-14.9c11.3-0.9,22.6,2.7,31.3,10
        l446.8,374.9c-8.6-6.9-19.5-10.2-30.4-9.3c-11.3,0.9-21.7,6.3-29,14.9C1152.8,676.5,1155,702.9,1172.5,718.3z"
                        />
                        <motion.path
                            initial="hidden"
                            variants={pathVariants}
                            d="M1380.6,671l52.8,44.3c18,15.1,20.3,41.9,5.2,59.9l0,0c-15.1,18-41.9,20.3-59.9,5.2l-52.8-44.3
        c-18-15.1-20.3-41.9-5.2-59.9l0,0C1335.8,658.3,1362.6,655.9,1380.6,671z"
                        />
                        <motion.path
                            initial="hidden"
                            variants={pathVariants}
                            d="M650.5,169.3l44.6,37.4c18,15.1,20.3,41.9,5.2,59.9l0,0c-15.1,18-41.9,20.3-59.9,5.2l-44.6-37.4
        c-18-15.1-20.3-41.9-5.2-59.9l0,0C605.7,156.6,632.5,154.2,650.5,169.3z"
                        />
                        <motion.path
                            initial="hidden"
                            variants={pathVariants}
                            d="M1141.7,914.4l52.8,44.3c18,15.1,20.3,41.9,5.2,59.9l0,0c-15.1,18-41.9,20.3-59.9,5.2l-52.8-44.3
        c-18-15.1-20.3-41.9-5.2-59.9l0,0C1097,901.7,1123.8,899.3,1141.7,914.4z"
                        />
                        <motion.path
                            initial="hidden"
                            variants={pathVariants}
                            d="M613,581.7l253.9,213c18,15.1,20.3,41.9,5.2,59.9l0,0c-15.1,18-41.9,20.3-59.9,5.2l-253.9-213
        c-18-15.1-20.3-41.9-5.2-59.9l0,0C568.2,568.9,595,566.6,613,581.7z"
                        />
                        <motion.path
                            initial="hidden"
                            variants={pathVariants}
                            d="M1044.1,888c-7.3,8.6-17.7,14-28.9,14.9c-11.4,0.9-22.6-2.6-31.3-10L615.1,583.5c8.7,7.3,19.9,10.9,31.3,10
        c11.2-0.9,21.7-6.3,28.9-14.9c15.1-18,12.6-44.9-5.6-60.2l368.8,309.4C1056.7,843,1059.2,870,1044.1,888z"
                        />
                        <motion.path
                            initial="hidden"
                            variants={pathVariants}
                            d="M1028.8,819.7L615.2,472.6c-18.2-15.3-20.7-42.2-5.6-60.2c7.3-8.7,17.7-14,29-14.9c11.3-0.9,22.6,2.7,31.3,10
        l413.6,347.1c-8.6-6.8-19.4-10.1-30.3-9.2c-11.3,0.9-21.7,6.3-29,14.9C1009.5,778.1,1011.5,804.4,1028.8,819.7z"
                        />
                        <motion.path
                            initial="hidden"
                            variants={pathVariants}
                            d="M1232.5,824.1c-7.3,8.7-17.7,14-29,14.9c-11.3,0.9-22.6-2.7-31.3-10c0,0-499.5-419.1-499.9-419.4
        c8.5,6.7,19.3,9.9,30.1,9c11.3-0.9,21.7-6.3,29-14.9c14.7-17.7,12.7-43.9-4.4-59.2l499.9,419.4
        C1245,779.2,1247.6,806.1,1232.5,824.1z"
                        />
                        <motion.path
                            initial="hidden"
                            variants={pathVariants}
                            d="M1319.3,841.5l0.8,0.6c18,15.1,20.3,41.9,5.2,59.9l0,0c-15.1,18-41.9,20.3-59.9,5.2l-0.8-0.6
        c-18-15.1-20.3-41.9-5.2-59.9l0,0C1274.5,828.8,1301.3,826.4,1319.3,841.5z"
                        />
                    </motion.symbol>
                </defs>

                <use href="#shape" fill="rgba(255,255,255,0.02)" transform="scale(1.4)" />
                <use href="#shape" fill={color} stroke={color} transform="scale(0.8)" />
            </svg>
        </div>
    );
};

Shape.propTypes = {
    color: PropTypes.string,
};

export default React.memo(Shape);
