import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

let StyledHOne = styled.h1`
    text-align: center;
`
let StyledHFour = styled.h4`
    text-align: center;
`

export const RandomEpCont = (displayEp) => {
    // useEffect(() => {
        // console.log(Object.values(displayEp)[0])
    // })

    return ( <>
        {/* <img src={Object.values(displayEp)[0].image.medium} alt="office ep photo"/> */}
        <StyledHOne>{Object.values(displayEp)[0].name}</StyledHOne>
        <StyledHFour>Season: {Object.values(displayEp)[0].season}, Episode Number: {Object.values(displayEp)[0].number}</StyledHFour>
    </> )
}

export default RandomEpCont