import React, { useState, useEffect } from 'react'
import ShuffleButton from './ShuffleButton'
import RandomEpCont from './RandomEpCont'

export const MainCont = () => {
    const [episodes, setEpisodes] = useState([])
    const [randEp, setRandEp] = useState()

    useEffect(() => {
        fetch('https://api.thetvdb.com/series/73244/episodes')
        .then(r => r.json())
        .then(setEpisodes)
    }, []
    )

    useEffect(() => {
        // console.log(randEp ? "we have a rand ep" : "no rand ep")
        console.log(randEp)
    })

    const shuffleEpisodes = (eps) => {
        if (eps === 'null' || typeof eps === 'undefined') {
            return "null"
        } else {
            let randomEp = eps[Math.floor(Math.random()*eps.length)]
            setRandEp(randomEp)
        }
    }

    return ( <>
        {randEp ? <RandomEpCont displayEp={randEp}/> : <></>}
        <ShuffleButton allEps={Object.values(episodes)[1]} shuffleEpisodes={shuffleEpisodes}/>
    </> )
}

export default MainCont