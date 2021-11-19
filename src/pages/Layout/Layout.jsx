import { Outlet, useParams } from "react-router-dom";
import SideMenu from "../../components/SideMenu/SideMenu";
import ClassForm from "../../components/ClassForm/ClassForm";
import ClassView from "../../components/ClassView/ClassView";

export default function Layout({ user, handleLogout, classes, getClasses, ...props }) {
    const param = useParams()
    if (Object.keys(param).length === 0) {
        return (
            <div style={{ display: 'flex' }}>
                <SideMenu handleLogout={handleLogout} classes={classes} getClasses={getClasses} />
                <ClassForm classes={classes} getClasses={getClasses} />
                <Outlet />
            </div>
        )
    }
    return (
        <div style={{ display: 'flex' }}>
            <SideMenu handleLogout={handleLogout} classes={classes} getClasses={getClasses} />
            <ClassView classes={classes} />
            <Outlet />
        </div>
    )
}