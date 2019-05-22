import React from 'react';
import "./styles.scss";

const Layout = (
    {name}
) => (<div
        id="navbar"
        className="navbar_container"
    >
        Navigation Bar Layout {name}
    </div>
);

export default Layout;
