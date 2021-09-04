import { Divider, Spacer, Stack } from "@chakra-ui/layout";
import React, { useContext } from "react";
import { RiInboxLine, RiLineChartLine } from "react-icons/ri";
import { BiTrash } from "react-icons/bi";
import {
  HiOutlineCheckCircle,
  HiOutlineDocument,
  HiOutlineStar,
} from "react-icons/hi";
import NavItem from "./nav-item";
import SectionDivider from "./section-divider";
import { FiPower, FiSettings } from "react-icons/fi";
import { useRouter } from "next/router";
import { NavContext } from "../layout_dashboard";
import CollapsedItem from "./collapsed-item";

const Sidebar = () => {
  const router = useRouter();
  const { isOpen } = useContext(NavContext);
  const NavAction = isOpen ? NavItem : CollapsedItem;

  return (
    <Stack
      layerStyle="card"
      w={!isOpen ? "60px" : "300px"}
      transition="width .4s ease-in-out"
      ml={2}
      h="full"
      fontSize="sm"
      display={["none", , "flex"]}
      overflowX={isOpen ? "clip" : "initial"}
    >
      {routes.map((props, rid) => (
        <NavAction
          key={`nav-item-${rid}`}
          active={router.pathname === props.href}
          {...props}
        />
      ))}
      {!isOpen ? <Divider /> : <SectionDivider>Optiuni</SectionDivider>}
      <Spacer />
      <Divider display={{ md: "none" }} />
      <NavAction name="Setari" icon={FiSettings} />
      <NavAction name="Deconectare" icon={FiPower} />
    </Stack>
  );
};

export default Sidebar;

export const routes = [
  {
    name: "Statistici",
    href: "/dashboard/analytics",
    icon: RiLineChartLine,
  },
  { name: "Sesizari primite", href: "/dashboard", icon: RiInboxLine },
  { name: "Rezolvate", href: "/dashboard/solved", icon: HiOutlineCheckCircle },
  {
    name: "In curs de rezolvare",
    href: "/dashboard/solving",
    icon: HiOutlineDocument,
  },
  { name: "Cu stea", href: "/dashboard/starred", icon: HiOutlineStar },
  { name: "Cos de gunoi", href: "/dashboard/rejected", icon: BiTrash },
];
