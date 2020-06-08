import React from 'react'

export default class ShuffleButton extends React.Component {

    shuffleEpisodes = (eps) => {
        console.log(eps)

    }

    render() {
        return(<>
            <button onClick={this.shuffleEpisodes(this.props.allEps)}>Click me to shuffle!</button>
        </>)
    }
}