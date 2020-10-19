import React from 'react'
import "./Sidebar.css"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat"
import StoreFrontIcon from "@material-ui/icons/VideoLibrary"
import {ExpandMoreOutlined, VideoLibrary} from "@material-ui/icons"
import SidebarRow from "./SidebarRow"
import userEvent from '@testing-library/user-event'
import {useStateValue} from "./StateProvider"
function Sidebar() {
    const [{user},dispatch]= useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 information center"/>
             <SidebarRow Icon={EmojiFlagIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StoreFrontIcon} title="MarketPlace"/>
            <SidebarRow Icon={VideoLibrary} title="Videos"/>

            <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace"/>
        </div>
    )
}

export default Sidebar
