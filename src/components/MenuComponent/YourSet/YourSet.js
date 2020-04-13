import React, {Fragment,useEffect, useState } from 'react';
import '../../../Grid.scss';
import FavoritesService from '../../Services/Favorites';
// import Card from '../Card/LayoutCard';

const YourSet = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    FavoritesService      
    .getAll()      
    .then(initialFavorites => {        
      setFavorites(initialFavorites)      
    })  
  }, [])

    return(
    <Fragment>
        <div className = "boxGrid">
            <div className = "YourSetContainer-1">
                <h3>Your Set:</h3>
            </div>
            <div className = "YourSetContainer-2">
                <h6>Everything that you like</h6>
            </div>
            <div>
            {favorites.map(favorites => (
                favorites.id
                    )
                )
            }
            </div>
        </div>
    </Fragment>
    )
}

export default YourSet;
