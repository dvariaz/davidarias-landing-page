import React from 'react';
import { motion } from "motion/react";
import { useLocale } from 'use-intl';

import CourseCard from '@/modules/studies/components/CourseCard';
import { humanizeDuration } from '@/modules/shared/utils/time';

const itemVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -100,
    opacity: 0,
  },
}

const StudiesList = ({ studies }) => {
  const locale = useLocale();

  return studies.map((course, index) => (
    <motion.div
      key={course.id}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={itemVariants}
      transition={{ delay: index / 10 }}
      style={{ margin: "1em 0" }}
    >
      <CourseCard
        title={course.name}
        instituteLogo={course.logo}
        date={course.date}
        duration={humanizeDuration(locale, course.duration)}
        className="min-h-30 my-2 justify-center"
      />
    </motion.div>
  ));
}

export default StudiesList;