import React from 'react';
import MenuView from './MenuView';

const MenuController = ({ menus }) => {
    return (
        <MenuView menus={menus}/>
    );
};

export default MenuController;