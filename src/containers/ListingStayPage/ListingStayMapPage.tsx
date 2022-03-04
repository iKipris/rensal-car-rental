import React, { FC } from "react";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionGridHasMap from "./SectionGridHasMap";
import { Helmet } from "react-helmet";

export interface ListingStayMapPageProps {
  className?: string;
}

const ListingStayMapPage: FC<ListingStayMapPageProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-ListingStayMapPage relative ${className}`}
      data-nc-id="ListingStayMapPage"
    >
      <Helmet>
        <title>Chisfis || Booking React Template</title>
      </Helmet>
      <BgGlassmorphism />

      {/* SECTION HERO */}
      <div className="container pt-10 pb-24 lg:pt-16 lg:pb-32">

        <div className="container pb-24 lg:pb-32 2xl:pl-10 xl:pr-0 xl:max-w-none mt-20">
          <SectionGridHasMap />
        </div>
      </div>
    </div>
  );
};

export default ListingStayMapPage;
