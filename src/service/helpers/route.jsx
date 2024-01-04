/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import {
  Aperture,
  Clock,
  Inbox,
  List,
  Settings,
  UserCheck,
  Users,
} from "react-feather";
import { Welcome } from "src/pages/Welcome";

// dynamic import
const Application = lazy(() => import("src/pages/Application"));
const Headers = lazy(() => import("src/pages/Headers"));
const History = lazy(() => import("src/pages/History"));
const Partners = lazy(() => import("src/pages/Partners"));
const Services = lazy(() => import("src/pages/Services"));
const Statistics = lazy(() => import("src/pages/Statistics"));
const Team = lazy(() => import("src/pages/Team"));

export const route = [
  {
    index: true,
    element: <Welcome />,
  },
  {
    path: "/history",
    name: "History",
    element: <History />,
    icon: <Clock size={20} color="grey" />,
  },
  {
    path: "/header",
    name: "Header",
    element: <Headers />,
    icon: <List size={20} color="grey" />,
  },
  {
    path: "/statistics",
    name: "Statistics",
    element: <Statistics />,
    icon: <Inbox size={20} color="grey" />,
  },
  {
    path: "/application",
    name: "Application",
    element: <Application />,
    icon: <Aperture size={20} color="grey" />,
  },
  {
    path: "/service",
    name: "Service",
    element: <Services />,
    icon: <Settings size={20} color="grey" />,
  },
  {
    path: "/team",
    name: "Team",
    element: <Team />,
    icon: <Users size={20} color="grey" />,
  },
  {
    path: "/partner",
    name: "Partners",
    element: <Partners />,
    icon: <UserCheck size={20} color="grey" />,
  },
];
