import React, { FC, useEffect, useState } from "react";
import Heading from "shared/Heading/Heading";
import Nav from "shared/Nav/Nav";
import NavItem from "shared/NavItem/NavItem";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import { ReactNode } from "react";

export interface HeaderFilterProps {
  heading: ReactNode;
  subHeading?: ReactNode;
}

const HeaderFilter: FC<HeaderFilterProps> = ({
  subHeading = "",
  heading = "",
}) => {

  return (
    <div className="flex flex-col relative">
      <Heading desc={subHeading}>{heading}</Heading>
    </div>
  );
};

export default HeaderFilter;
