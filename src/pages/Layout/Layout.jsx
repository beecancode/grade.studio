import { Grid, Menu } from "semantic-ui-react";
import { Outlet } from "react-router-dom";
import SideMenu from "../../components/Menu/Menu";

export default function Layout({ user, handleLogout }) {
    return (
        <Grid>
            <Grid.Row>
                <SideMenu handleLogout={handleLogout} />
            </Grid.Row>
        </Grid>
    );
}