import React from 'react';
import FetchPost from '../saga';
import './General.css';


function Units() {
    return(
<div>
<p className="units-title"> Units Page</p>
<p className="units-title"> Ages</p>
<div className="data">
<FetchPost />
</div>
</div>
    )
}

export default Units;