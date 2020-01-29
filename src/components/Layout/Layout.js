import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css'

const layout = (props) => (
    <Aux>
        <div className = {classes.Content}>Toolbar, Sidebar, Backdrop</div>
        <main className = {classes.Content}s>
            {props.children}
        </main>
    </Aux>
);

export default layout;