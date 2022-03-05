import {  NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/home",
    name: "Home",
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "About us",
  },
  {
    id: ncNanoId(),
    href: "/our-fleet",
    name: "Our fleet",
  },
  {
    id: ncNanoId(),
    href: "/terms-conditions",
    name: "Terms and conditions",
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact",
  },

];
