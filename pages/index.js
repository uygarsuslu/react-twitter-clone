import React from "react"

import CONST from "../constants"

import "../styles/app.css"
import Layout from "../components/layout"

import useWindowSize from "../hooks/useWindowSize";

function HomePage() {
    const size = useWindowSize();
    return (
        <Layout>
          <div flat={size.width < CONST.DESKTOP_SIZE}>sidebar</div>
          <div>main</div>
          {size.width > CONST.TABLET_SIZE && <div>extra</div>}
        </Layout>
    )
}
  
export default HomePage