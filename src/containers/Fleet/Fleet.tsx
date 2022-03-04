import React from "react";
import SectionGridFeaturePlaces from "./SectionGridFeaturePlaces";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import { Helmet } from "react-helmet";

function Fleet() {
  return (
    <div className="nc-Fleet relative overflow-hidden">
      <Helmet>
        <title>Chisfis || Booking React Template</title>
      </Helmet>

      <div className="container relative space-y-24 mb-24 lg:space-y-32 lg:mb-32">

        {/* SECTION */}
        <div className="relative py-16 mt-20">
          <BackgroundSection />
          <SectionGridFeaturePlaces />
        </div>
      </div>
    </div>
  );
}

export default Fleet;
