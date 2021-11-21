import { Outlet, useParams } from "react-router-dom";
import SideMenu from "../../components/SideMenu/SideMenu";
import ClassForm from "../../components/ClassForm/ClassForm";
import ClassView from "../../components/ClassView/ClassView";
import { useState } from 'react'

export default function Layout({ user, handleLogout, classes, getClasses, showClassForm , ...props }) {
    const param = useParams()
    const [buttonClick, setButtonClick] = useState(false);
    // store the payload, aka the users infor in state
  
   

    if (Object.keys(param).length === 0) {
        return (
            <div style={{ display: 'flex' }}>
                <SideMenu handleLogout={handleLogout} classes={classes} getClasses={getClasses} />
                <ClassForm getClasses={getClasses} />
                <Outlet />
            </div>
        )
    }
    return (
        <div style={{ display: 'flex' }}>
            <SideMenu handleLogout={handleLogout} classes={classes} getClasses={getClasses} />
            <ClassView classes={classes}  getClasses={getClasses}/>
            <Outlet />
        </div>
    )
}