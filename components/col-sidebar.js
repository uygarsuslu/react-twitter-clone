import React from "react"

import cn from "classnames"

import styles from "./col-sidebar.module.css"

function Sidebar ({children}) {
    return <div className={cn(styles.sidebar)}>{children}</div>
}

export default Sidebar