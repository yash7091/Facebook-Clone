import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css"
import HomeIcon from "@material-ui/icons/Home"
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionOutlined from "@material-ui/icons/SubscriptionsOutlined";
import StorefromOutlined from "@material-ui/icons/StorefrontOutlined"
import SuperviseUser from "@material-ui/icons/SupervisedUserCircleOutlined";
import { Avatar,IconButton } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add"
import ForumIcon from "@material-ui/icons/Forum"
import NotificatioActiveicon from "@material-ui/icons/NotificationsActive"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import {useStateValue} from "./StateProvider";
function Header() {
    const[{user},dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/220px-Facebook_f_logo_%282019%29.svg.png"/>
                {/* <img src="./Facebook_f_logo_"/> */}
            </div>
            <div className="header__input">
                <SearchIcon/>
                <input type="text" placeholder="Search Facebook"/>
            </div>

            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SubscriptionOutlined fontSize="large"/>
                </div>
                <div className="header__option">
                    <StorefromOutlined fontSize="large"/>
                </div>
                <div className="header__option">
                    <SuperviseUser fontSize="large"/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificatioActiveicon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
