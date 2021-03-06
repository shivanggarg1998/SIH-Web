import Dashboards from "views/Dashboard/Dashboard.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import UserPage from "views/UserPage/UserPage.jsx";
import Login from "../layouts/login/login";
import CaseReport from "../views/CaseReport/CaseReport"
var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboards
  },
  //  { path: "/icons", name: "Icons", icon: "design_image", component: Icons },
  { path: "/maps", name: "Maps", icon: "location_map-big", component: Maps },
  {
    path: "/case_report",
    name: "Report Case",
    icon: "files_single-copy-04",
    component: CaseReport
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage
  },
  {
    path: "/extended-tables",
    name: "Grievances",
    icon: "files_paper",
    component: TableList
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "design-2_ruler-pencil",
  //   component: Typography
  // },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "objects_spaceship",
  //   component: Upgrade
  // },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
