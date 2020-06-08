import React from 'react'

export default class ShuffleButton extends React.Component {

    shuffleEpisodes = (eps) => {
        if (eps === 'null' || typeof eps === 'undefined') {
            return "null"
        } else {
            // console.log(eps.length)
            let randomEp = eps[Math.floor(Math.random()*eps.length)]
            console.log(randomEp)
        }
    }

    render() {
        return(<>
            <button onClick={() => this.shuffleEpisodes(this.props.allEps)}>Click me to shuffle!</button>
        </>)
    }
}