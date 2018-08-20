
import React, { Component } from 'react';
import { Menu } from './Menu';

 export class MenuContainer extends Component {

    state = {
        open: true,
        toggleMenu: false
    }


    toggleMenu = (value) => {
        console.log(value)
        this.setState({ toggleMenu: value })
    }

    open = (value) => {
        console.log(value)
        this.setState({ open: value })
    }


    render() {

        return <Menu toggleMenu={() => this.toggleMenu} open={() => this.open} />

    }

}

