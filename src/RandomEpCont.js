import React, { useState } from 'react'

export const RandomEpCont = (displayEp) => {
    return ( <>
        {console.log(Object.values(displayEp)[0].episodeName)}
        <h1>{Object.values(displayEp)[0].episodeName}</h1>
    </> )
}

export default RandomEpCont