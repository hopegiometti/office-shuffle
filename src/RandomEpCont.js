import React, { useState } from 'react'

export const RandomEpCont = (displayEp) => {
    return ( <>
        {console.log(Object.values(displayEp)[0].episodeName)}
        <h1>{Object.values(displayEp)[0].episodeName}</h1>
        <h4>Season: {Object.values(displayEp)[0].airedSeason}, Episode Number: {Object.values(displayEp)[0].airedEpisodeNumber}</h4>
    </> )
}

export default RandomEpCont