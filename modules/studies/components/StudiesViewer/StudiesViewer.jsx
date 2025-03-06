'use client';

import clsx from 'clsx';
import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';

import InstitutePicker from "@/modules/studies/components/InstitutePicker";
import StudiesList from "@/modules/studies/components/StudiesList";

const StudiesViewer = ({ studies, className }) => {
  const t = useTranslations("studies");
  const studiesListRef = useRef(null);
  const [selectedInstituteId, setSelectedInstituteId] = useState(null);

  const selectInstitute = (instituteId) => {
    setSelectedInstituteId(selectedInstituteId == instituteId ? null : instituteId);

    if (studiesListRef.current) studiesListRef.current.scrollTop = 0;
  };

  const [selectedInstitute] = studies.filter((study) => study.id === selectedInstituteId);
  const coursesBySelectedInstitute = selectedInstitute
    ? selectedInstitute.courses.map((study) => ({ ...study, logo: selectedInstitute.logo }))
    : studies.map((study) => study.courses.map((course) => ({ ...course, logo: study.logo }))).flat();

  return (
    <div className={clsx(className)}>
      <div className="flex w-full lg:w-1/2 p-8">
          <div className="flex flex-col gap-4 max-w-xl mx-auto">
              <h1 className="main-text text-xl text-center">{t("title")}</h1>

              <p className="description-text text-center">{t("description")}</p>

              <div className="flex w-full mx-0">
                  <InstitutePicker currentInstitute={selectedInstituteId} institutes={studies} onInstitutePick={selectInstitute} />
              </div>
          </div>
      </div>

      <div
        ref={studiesListRef}
        className="relative w-full lg:h-full flex-1 px-8 lg:w-1/2 flex flex-col overflow-y-scroll scrollbars-hidden">
          <motion.div
            className="py-10">
              <StudiesList studies={coursesBySelectedInstitute} />
          </motion.div>
      </div>
    </div>
  )
}

export default StudiesViewer;