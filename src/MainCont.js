import React, { useState, useEffect } from 'react'
import ShuffleButton from './ShuffleButton'

export const MainCont = () => {
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        fetch('https://api.thetvdb.com/series/73244/episodes')
        .then(r => r.json())
        .then(setEpisodes)
    }, []
    )

    return ( <>
        {/* {console.log(Object.values(episodes)[1])} */}
        <ShuffleButton allEps={Object.values(episodes)[1]}/>
    </> )
}

export default MainCont