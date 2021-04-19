import Dashboard from "views/Dashboard";
import Join from "views/ForexChat/Join";
import TableList from "views/TableList";
import User from "views/UserProfile";

const dashboardRoutesB = [
  
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
      component: User,
      layout: "/admin",
    },
   
    
    {
      path: "/table",
      name: "Deploy a Strategy",
      icon: "fas fa-chart-bar",
      component: TableList,
      layout: "/admin",
    },
    {
      path: "/join",
      name: "Join IQ disscution",
      icon: "fas fa-comments",
      component: Join,
      layout: "/admin",
    }
    
    
   
  ];
  
  export default dashboardRoutesB;