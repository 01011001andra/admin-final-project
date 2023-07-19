import { BiCalendarEvent } from "react-icons/bi";
import { GiPublicSpeaker } from "react-icons/gi";
import { TbLayoutDashboard } from "react-icons/tb";

export const route = [
  {
    path: "/",
    name: "Dashboard",
    icon: <TbLayoutDashboard size={24} />,
  },
  {
    path: "/acara",
    name: "Acara",
    icon: <BiCalendarEvent size={24} />,
  },
  {
    path: "/ceramah",
    name: "Ceramah",
    icon: <GiPublicSpeaker size={24} />,
  },
  {
    path: "/keuangan",
    name: "Keuangan",
    icon: <TbLayoutDashboard size={24} />,
  },
];
