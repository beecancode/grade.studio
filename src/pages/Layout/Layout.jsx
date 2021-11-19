import { Grid, Menu, Container } from "semantic-ui-react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import SideMenu from "../../components/SideMenu/SideMenu";
import WebsiteDescription from "../../components/WebsiteDescription/WebsiteDescription";
import ClassForm from "../../components/ClassForm/ClassForm";

export default function Layout({ user, handleLogout, classes , getClasses, ...props }) {
    console.log(classes, props);
    const location = useLocation()
    const param = useParams()
    console.log.log(location, param, "<-location, param");
    return (
        <div style={{ display: 'flex' }}>
            <SideMenu handleLogout={handleLogout} classes={classes} getClasses={getClasses}/>
            <ClassForm classes={classes} getClasses={getClasses}/>
            <Outlet />
        </div>
    )

}