import React, { useState, useEffect } from 'react'
import ShuffleButton from './ShuffleButton'
import RandomEpCont from './RandomEpCont'
import PrisonMike from './prisonmike.png'

export const MainCont = () => {
    const [episodes, setEpisodes] = useState([])
    const [randEp, setRandEp] = useState()

    // useEffect(() => {
    //     fetch('https://api.thetvdb.com/series/73244/episodes')
    //     .then(r => r.json())
    //     .then(setEpisodes)
    // }, []
    // )

    useEffect(() => {
        fetch("https://tvjan-tvmaze-v1.p.rapidapi.com/shows/526/episodes", {
	    "method": "GET",
	    "headers": {
		"x-rapidapi-host": "tvjan-tvmaze-v1.p.rapidapi.com",
		"x-rapidapi-key": "9cbcfe5e94mshf2c040af5a6fbbfp1c3b83jsneaac07fbf887"
	}
    })
    .then(r => r.json())
    .then(setEpisodes)
}, [])

    // useEffect(() => {
        // console.log(randEp ? "we have a rand ep" : "no rand ep")
        // console.log(randEp)
        // console.log(episodes)
        // console.log(Object.values(episodes).length)
    // })

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
        {/* <img src={PrisonMike} alt="photo of prison mike"/> */}
        <div>
            <ShuffleButton allEps={Object.values(episodes)} shuffleEpisodes={shuffleEpisodes}/>
        </div>
    </> )
}

export default MainCont