import React, { FC, ReactNode } from "react";
import { DEMO_STAY_LISTINGS } from "data/listings";
import { StayDataType } from "data/types";
import HeaderFilter from "../Fleet/HeaderFilter";
import PropertyCardH from "components/PropertyCardH/PropertyCardH";

// OTHER DEMO WILL PASS PROPS
const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);
//
export interface SectionGridFeaturePropertyProps {
  stayListings?: StayDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
}

const SectionGridFeatureProperty: FC<SectionGridFeaturePropertyProps> = ({
  gridClass = "",
  heading = "Rensal Fleet",
  subHeading = "",
}) => {
  const renderCard = (stay: StayDataType, index: number) => {
    return <PropertyCardH key={index} className="h-full" data={stay} />;
  };

  return (
    <div className="nc-SectionGridFeatureProperty relative">
      <HeaderFilter
        subHeading={subHeading}
        heading={heading}
      />
      <div
        className={`grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 ${gridClass}`}
      >
        {DEMO_DATA.map(renderCard)}
      </div>
    </div>
  );
};

export default SectionGridFeatureProperty;
