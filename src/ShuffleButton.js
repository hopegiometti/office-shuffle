import React from 'react'

export default class ShuffleButton extends React.Component {

    render() {
        return(<>
            <button onClick={() => this.props.shuffleEpisodes(this.props.allEps)}>Click me to shuffle!</button>
        </>)
    }
}