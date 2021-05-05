import React from 'react';
import "./Footer.css";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';


function Footer(){
    return(
        <div className="footer">
<div className="footer_left">
<p>Album</p>
</div>
<div className="footer_center">
<ShuffleIcon className="footer_green"/>
<SkipPreviousIcon className="footer_icon"/>
<PlayCircleOutlineIcon fontSize="large" className="footer_icon"/>
<SkipNextIcon className="footer_icon"/>
<RepeatIcon className="footer_green"/>



</div>
<div className="footer_right">
<p>volume</p>
</div>
            </div>
    )
}
export default Footer;