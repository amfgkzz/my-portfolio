import React, { Component } from 'react';
import styles from './style';

// Material UI
import { AppBar } from '@material-ui/core';

class Header extends Component {

    render() {

        return (
            <>

                    <AppBar style={styles}>Test</AppBar>

            </>
        )
    }
}

export default Header;