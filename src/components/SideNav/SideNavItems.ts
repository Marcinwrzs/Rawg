import UserIcon from "@mui/icons-material/PersonRounded";
import StarIcon from "@mui/icons-material/StarBorderRounded";
import TodayIcon from "@mui/icons-material/TodayRounded";

export const sideNavItems = [
  { type: "headerLink", label: "nav.home", to: "/", icon: null },
  {
    type: "headerLink",
    label: "nav.reviews",
    to: "/reviews",
    icon: null,
  },
  { type: "headerLink", label: "nav.userPanel", to: "/user", icon: UserIcon },

  { type: "sectionHeader", label: "nav.releasesHeader" },

  {
    type: "link",
    label: "nav.last30",
    to: "/releases/last30",
    icon: TodayIcon,
  },
  {
    type: "link",
    label: "nav.thisWeek",
    to: "/releases/this-week",
    icon: TodayIcon,
  },
  {
    type: "link",
    label: "nav.nextWeek",
    to: "/releases/next-week",
    icon: TodayIcon,
  },
  {
    type: "link",
    label: "nav.calendar",
    to: "/releases/calendar",
    icon: TodayIcon,
  },
  { type: "sectionHeader", label: "nav.topHeader" },
  {
    type: "link",
    label: "nav.bestOfYear",
    to: "/top/best-of-year",
    icon: StarIcon,
  },
  {
    type: "link",
    label: "nav.popular2024",
    to: "/top/popular-2024",
    icon: StarIcon,
  },
  { type: "link", label: "nav.top250", to: "/top/250", icon: StarIcon },
  { type: "headerLink", label: "nav.games", to: "/games", icon: null },
];
