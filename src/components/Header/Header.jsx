import React from 'react'

import SearchBar from './SearchBar';
import NavBarHeader from './NavBarHeader';
import NavBarCategory from './NavBarCategory';

function Header() {
    return (
        <div className='border-bottom'>
            <NavBarHeader></NavBarHeader>
            <SearchBar></SearchBar>
            <NavBarCategory></NavBarCategory>
        </div>
    )
}

export default Header