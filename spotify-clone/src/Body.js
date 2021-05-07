import React from 'react';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import './Body.css';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

function Body({ spotify }) {
    const [{discover_weekly},dispatch] = useDataLayerValue();
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="bodyInfo">
                <img src={discover_weekly?.images[0].url} atl="" />
                <div className="body_infotext">
                    <h6>PLAYLIST</h6>
                    <h2>♥👻♥</h2>
                    <p>{discover_weekly?.description}</p>

                </div>

            </div>
            <div className="body_songs">
                <div className="body_icon">
                    <PlayCircleFilledWhiteIcon className="body_shuffle"/>
                    <FavoriteIcon className="like_icon" fontSize="large"/>
                    <MoreHorizIcon/>
                    
                </div>
                <hr/>
                {discover_weekly?.tracks.items.map(item=>(
<SongRow track={item.track}/>
                ))}
            </div>
        </div>
    )

}
export default Body;