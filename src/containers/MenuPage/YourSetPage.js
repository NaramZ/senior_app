import React, {Fragment} from 'react';
import YourSet from '../../components/MenuComponent/YourSet/YourSet';
import Navigation from '../../components/MenuComponent/MenuNavBar/NavBar';

const YourSetPage = () => {
    return (
        <Fragment>
        <Navigation/>
        <YourSet />
        </Fragment>
    )
}

export default YourSetPage;