import React, { FC, ReactNode } from "react";
import imagePng from "images/hero-right.png";
import HeroSearchForm, {
  SearchTab,
} from "components/HeroSearchForm/HeroSearchForm";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";

export interface SectionHeroArchivePageProps {
  className?: string;
  listingType?: ReactNode;
  currentPage: "Stays" | "Experiences" | "Cars" | "Flights";
  currentTab: SearchTab;
}

const SectionHeroArchivePage: FC<SectionHeroArchivePageProps> = ({
  className = "",
  currentPage,
  currentTab,
}) => {
  return (
    <div
      className={`nc-SectionHeroArchivePage flex flex-col relative ${className}`}
      data-nc-id="SectionHeroArchivePage"
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
            Rensal, car & experiences
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 ml-1">
            Accompanying us, you have a trip full of experiences. With Rensal,
            booking quality cars.
          </span>
          <ButtonPrimary>Get started </ButtonPrimary>
        </div>
        <div className="flex-grow">
          <img className="w-full" src={imagePng} alt="hero" />
        </div>
      </div>

      <div className="flow-root w-full">
        <div className="z-10 lg:-mt-40 w-full">
          <HeroSearchForm currentPage={currentPage} currentTab={currentTab} />
        </div>
      </div>
    </div>
  );
};

export default SectionHeroArchivePage;
