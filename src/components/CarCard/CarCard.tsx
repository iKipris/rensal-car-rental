import React, { FC } from "react";
import { DEMO_CAR_LISTINGS } from "data/listings";
import { CarDataType } from "data/types";
import { Link } from "react-router-dom";
import BtnLikeIcon from "components/BtnLikeIcon/BtnLikeIcon";
import SaleOffBadge from "components/SaleOffBadge/SaleOffBadge";
import Badge from "shared/Badge/Badge";
import NcImage from "shared/NcImage/NcImage";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import CategoryBadgeList from "../CategoryBadgeList/CategoryBadgeList";
import StartRating from "../StartRating/StartRating";

export interface CarCardProps {
  className?: string;
  data?: CarDataType;
  size?: "default" | "small";
}

const DEMO_DATA: CarDataType = DEMO_CAR_LISTINGS[0];

const CarCard: FC<CarCardProps> = ({
  size = "default",
  className = "",
  data = DEMO_DATA,
}) => {
  const {
    featuredImage,
    title,
    href,
    saleOff,
    isAds,
    price,
    reviewStart,
    reviewCount
  } = data;

  const renderSliderGallery = () => {
    return (
      <div className="relative w-full rounded-2xl overflow-hidden">
        <div className="aspect-w-16 aspect-h-9 ">
          <NcImage
            containerClassName="flex items-center justify-center"
            className="w-full"
            src={featuredImage}
          />
        </div>
        {saleOff && <SaleOffBadge className="absolute left-3 top-3" />}
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className={size === "default" ? "p-5  space-y-4" : "p-3  space-y-2"}>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h2
                className={`  capitalize ${
                    size === "default"
                        ? "text-xl font-semibold"
                        : "text-base font-medium"
                }`}
            >
              <span className="line-clamp-1">{title}</span>
            </h2>
            <span className="text-base font-semibold">
            {price}
              {` `}
              {size === "default" && (
                  <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                /day
              </span>
              )}
          </span>
          </div>
        </div>
        <div className="w-14  border-b border-neutral-100 dark:border-neutral-800"></div>
      <div className="flex items-center justify-center" style={{zoom: "0.94"}}>
        <ButtonPrimary className="mt-1">Rent this car</ButtonPrimary>
      </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-CarCard group relative border border-neutral-200 dark:border-neutral-700 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow bg-white dark:bg-neutral-900 ${className}`}
      data-nc-id="CarCard"
    >
      <Link to={href} className="flex flex-col">
        {renderSliderGallery()}
        {renderContent()}
      </Link>
    </div>
  );
};

export default CarCard;
