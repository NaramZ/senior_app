import React, {Fragment} from 'react';
import '../../../Grid.scss';
import History from './SetHistory';
const YourSet = () => {


    return(
        <Fragment>
        <div className = "boxGrid">
            <div className = "YourSetContainer-1">
                <h3>Histroy:</h3>
            </div>
            <div className = "YourSetContainer-2">
                <h6>Everything that you've ordered</h6>
            </div>
        </div>
            <History/>
    </Fragment>
    )
}

export default YourSet;
