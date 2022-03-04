import React, { FC } from "react";
import StayCardH from "components/StayCardH/StayCardH";
import { DEMO_STAY_LISTINGS } from "data/listings";
import Heading2 from "components/Heading/Heading2";

const DEMO_STAYS = DEMO_STAY_LISTINGS.filter((_, i) => i < 12);

export interface SectionGridHasMapProps {}

const SectionGridHasMap: FC<SectionGridHasMapProps> = () => {
  return (
    <div>
      <div className="relative flex min-h-screen">
        {/* CARDSSSS */}
        <div className="min-h-screen w-full xl:w-[1080px] 2xl:w-[1200px] flex-shrink-0 xl:px-8">
          <div style={{marginTop: "-100px", marginBottom: "-30px"}}>
          <Heading2 heading={"Available cars"} subHeading={" "}/>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {DEMO_STAYS.map((item) => (
              <div
                key={item.id}
              >
                <StayCardH data={item} />
              </div>
            ))}
          </div>
          <div className="flex mt-16 justify-center items-center">
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionGridHasMap;
