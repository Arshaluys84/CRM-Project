import React from "react";
import {Header} from "antd/es/layout/layout";
import {NavLink} from "react-router-dom";

const style = {
    header: {
        backgroundColor: '#b49dc8',
        height: 100 + 'px',
        fontSize: 25 + 'px',
        color: 'white',
    },
    content: {
        display: 'flex',
        gap: 10 + 'px',
        textAlign: 'center',
    }
}
const MainHeader = () => {
    return <Header style={style.header}>
        <div style={style.content}>
            <span><NavLink to='/'>Home</NavLink> </span>
            <span><NavLink to='/costs'>Costs</NavLink></span>
            <span><NavLink to='/budget'>Budget</NavLink></span>
            <span><NavLink to='/deals'>Deals</NavLink></span>
        </div>
    </Header>
}

export default MainHeader