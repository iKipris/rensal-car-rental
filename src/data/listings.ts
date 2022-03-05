import __stayListing from "./jsons/__stayListing.json";

import { StayDataType } from "./types";

const DEMO_STAY_LISTINGS = __stayListing.map((post, index): StayDataType => {

  return {
    ...post,
    saleOff: !index ? "-20% today" : post.saleOff,
    isAds: !index ? true : post.isAds,
  };
});

export { DEMO_STAY_LISTINGS };
