'use client';

import { useState } from "react";
import { useTranslations } from "next-intl";

import AnimatedBackground from "@/modules/shared/components/AnimatedBackground";
import DotCarousel from "@/modules/my-story/components/DotCarousel";

const StoriesViewer = ({ stories }) => {
  const t = useTranslations("my-story");

  const [index, setIndex] = useState(0);

  const handlePageChange = (pageIndex) => {
    setIndex(pageIndex);
  };

  return (
    <>
      <div className="my-story__content text-white relative z-10 text-center pt-5 px-0 w-full max-w-[800px]">
        <h2 className="main-text text-xl mb-4">{t("title")}</h2>

        <div className="flex flex-col items-center w-full overflow-hidden">
          <DotCarousel
            items={stories}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      <AnimatedBackground
        src={stories[index]?.background.urls.large}
        className="w-full h-screen absolute top-0 left-0 z-0"
      />
    </>
  )
}

export default StoriesViewer;
