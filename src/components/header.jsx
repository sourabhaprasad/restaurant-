import React from 'react';


export default function Header({menuItems, activeMenuItem, onMenuItemClick}) {
    return (
        <div className='Header'>
            <h1>The स्वाद</h1>
            <menu>
                {menuItems.map((menuItem)=>(
                    <li
                     key={menuItem}
                     classNam e={activeMenuItem === menuItem? "active" : ""}
                     onClick={() => onMenuItemClick(menuItem)}
                    >
                        {menuItem}
                    </li>
                ))}
            </menu>
        </div>
    )
}