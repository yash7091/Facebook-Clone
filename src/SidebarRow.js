import React from 'react'
import "./SidebarRow.css"
import {Avatar, Icon} from "@material-ui/core"
function SidebarRow({title,src,Icon}) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon src={src}/>}

            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
