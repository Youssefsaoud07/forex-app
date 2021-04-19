
import React, { Component,useState } from "react";
import { useLocation, Route, Switch,BrowserRouter } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import routesA from "routesAdmin.js";
import routesB from "routesBroker.js";
import routes from "routes.js";
import sidebarImage from "assets/img/sidebar-3.jpg";
import Authen from "views/Auth/Auth";

function Admin() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  
  
  let check 
  if (user){
    const profession =user.result.profession;
  if (profession ==="CEO"){
    check=routesA;
  }else if (profession==="broker"){
    check=routesB;
  }else{check=routes}
  console.log('check',check)}else check=routes
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const getRoutes = (check) => {
    return check.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);
  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} image={hasImage ? image : ""} routes={check} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
           
          <div className="content">
          
            <Switch>{getRoutes(check)}  
            
            </Switch>

          </div>
          <Footer />
        </div>
      </div>
     
    </>
  );
}

export default Admin;
