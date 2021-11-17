import { Grid, Menu, Container } from "semantic-ui-react";
import { Outlet } from "react-router-dom";
import SideMenu from "../../components/SideMenu/SideMenu";
import WebsiteDescription from "../../components/WebsiteDescription/WebsiteDescription";

export default function Layout({ user, handleLogout }) {
    return (
        <div style={{ display: 'flex' }}>
            <SideMenu handleLogout={handleLogout} />
            <WebsiteDescription />
            <Outlet />
        </div>
    )

}