import React from 'react';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import './Body.css';
function Body({ spotify }) {
    const [{discover_weekly},dispatch] = useDataLayerValue();
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="bodyInfo">
                <img src={discover_weekly?.images[0].url} atl="" />
                <div className="body_infotext">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>

                </div>

            </div>
        </div>
    )

}
export default Body;