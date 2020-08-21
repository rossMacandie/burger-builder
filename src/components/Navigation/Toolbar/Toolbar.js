import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Items from '../Items/Items'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = props => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggle}/>
        <div  className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <Items/>
        </nav>
    </header>
);

export default toolbar;