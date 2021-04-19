import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
const dashboardRoutesA = [
  
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "nc-icon nc-chart-pie-35",
      component: Dashboard,
      layout: "/admin",
    },
    
    {
      path: "/ai",
      name: "admin dashboard",
      icon: "fas fa-comments",
      component: Notifications,
      layout: "/admin",
    }
    
   
  ];
  
  export default dashboardRoutesA;