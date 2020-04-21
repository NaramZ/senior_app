import React, {Fragment} from 'react';
import '../../../Grid.scss';
import Favorites from './SetYourSet';


const YourSet = () => {

    return(
    <Fragment>
        <div className = "boxGrid">
            <div className = "YourSetContainer-1">
                <h3>Your Set:</h3>
            </div>
            <div className = "YourSetContainer-2">
                <h6>Everything that you like</h6>
            </div>
            <Favorites />
        </div>
    </Fragment>
    )
}

export default YourSet;
