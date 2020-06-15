import React from 'react'
import PrisonMike from './prisonmike.png'

export default class ShuffleButton extends React.Component {

    render() {
        return(<>
            <button onClick={() => this.props.shuffleEpisodes(this.props.allEps)}><img src={PrisonMike} alt="photo of prison mike"/>Click me to shuffle!</button>
        </>)
    }
}