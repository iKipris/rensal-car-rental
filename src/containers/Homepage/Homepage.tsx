import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionHeroArchivePage from "components/SectionHeroArchivePage/SectionHeroArchivePage";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import React, { FC } from "react";
import { Helmet } from "react-helmet";
import SectionClientSay from "../../components/SectionClientSay/SectionClientSay";
import SectionVideos from "../Fleet/SectionVideos";
import SectionGridFeatureProperty from "./SectionGridFeatureProperty";
import SectionHowItWork from "../../components/SectionHowItWork/SectionHowItWork";
import HIW1img from "../../images/HIW2-1.png";
import HIW1imgDark from "../../images/HIW2-1-dark.png";
import HIW2img from "../../images/HIW2-2.png";
import HIW2imgDark from "../../images/HIW2-2-dark.png";
import HIW3img from "../../images/HIW2-3.png";
import HIW3imgDark from "../../images/HIW2-3-dark.png";
import SectionOurFeatures from "../../components/SectionOurFeatures/SectionOurFeatures";
import rightImgPng from "../../images/our-features-2.png";

export interface HomepageProps {
  className?: string;
}

const Homepage: FC<HomepageProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-Homepage relative overflow-hidden ${className}`}
      data-nc-id="Homepage"
    >
      <Helmet>
        <title>Rensal || Car renting services</title>
      </Helmet>
      <BgGlassmorphism />

      <div className="container relative">
        {/* SECTION HERO */}
        <SectionHeroArchivePage
          currentPage="Cars"
          currentTab="Cars"
          className="pt-10 pb-24 lg:pb-32 lg:pt-16 "
        />

        {/* SECTION */}
        {/* SECTION */}
        <div className="relative py-16 mb-20">
          <BackgroundSection />
          <SectionGridFeatureProperty />
        </div>
        {/* SECTION */}
        <div className="relative py-16" style={{marginTop: "100px"}}>
          <SectionHowItWork
              data={[
                {
                  id: 1,
                  img: HIW1img,
                  imgDark: HIW1imgDark,
                  title: "Smart search ",
                  desc: "Name the area or type of home you are looking for the search bar. Our app will find you the perfect match.",
                },
                {
                  id: 2,
                  img: HIW2img,
                  imgDark: HIW2imgDark,
                  title: "Choose Car",
                  desc: "From the number of options our app will provide, you can select any property that you like to explore.",
                },
                {
                  id: 3,
                  img: HIW3img,
                  imgDark: HIW3imgDark,
                  title: "Book your Car",
                  desc: "Find a home or space from our search bar. Enter your specific location, property type and price range.",
                },
              ]}
          />
        </div>
        <div style={{marginTop: "120px"}}>
          {/* SECTION2 */}
          <SectionOurFeatures type="type2" rightImg={rightImgPng} />
        </div>
        <div className="relative py-16" style={{marginTop: "100px"}}>
          <SectionVideos />
        </div>
        <div className="relative py-16" style={{marginTop: "100px", marginBottom: "100px"}}>
          <BackgroundSection />
          <SectionClientSay />
        </div>
        <div className="relative py-16" style={{marginTop: "80px", marginBottom: "80px"}}>
          <SectionSubscribe2 />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
