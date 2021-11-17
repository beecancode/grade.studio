import { Grid, Menu } from "semantic-ui-react";
import { Outlet } from "react-router-dom";
import SideMenu from "../../components/SideMenu/SideMenu";

export default function Layout({ user, handleLogout }) {
    return (
        <>
                <SideMenu handleLogout={handleLogout} />
        </>
    );
}