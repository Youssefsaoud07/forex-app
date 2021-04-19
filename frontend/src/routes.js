
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import Authen from "views/Auth/Auth";
import Posts from "views/posts/posts";
import Forms from "views/form/Form"
import Join from "views/ForexChat/Join";
import Users from "views/users/users";
// import Authen from "components/Authe/Auth";

const dashboardRoutes = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Crypto-currencies",
    icon: "fab fa-btc",
    component: Posts,
    layout: "/Posts",
  },
  
  
  // {
  //   path: "/auth",
    
    
  //   component: Authen,
  //   layout: "/admin",
  // },
  // {
  //   path: "/table",
  //   name: "Deploy a Strategy",
  //   icon: "fas fa-chart-bar",
  //   component: TableList,
  //   layout: "/admin",
  // },
  {
    path: "/join",
    name: "Join IQ disscution",
    icon: "fas fa-comments",
    component: Join,
    layout: "/admin",
  }
  // {
  //   path: "/ai",
  //   name: "admin dashboard",
  //   icon: "fas fa-comments",
  //   component: Notifications,
  //   layout: "/admin",
  // }
  
 
];

export default dashboardRoutes;
