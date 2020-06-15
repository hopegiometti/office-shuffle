import React, { useState, useEffect } from 'react'

export const RandomEpCont = (displayEp) => {
    // useEffect(() => {
        // console.log(Object.values(displayEp)[0])
    // })

    return ( <>
        <img src={Object.values(displayEp)[0].image.medium} alt="office ep photo"/>
        <h1>{Object.values(displayEp)[0].name}</h1>
        <h4>Season: {Object.values(displayEp)[0].season}, Episode Number: {Object.values(displayEp)[0].number}</h4>
    </> )
}

export default RandomEpCont