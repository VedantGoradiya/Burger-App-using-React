import React from 'react';

import Aux from '../../hoc/Auxx';
import classes from './Layout.css';

const layout = ( props ) => (
    <Aux>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;