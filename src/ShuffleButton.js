import React from 'react'
import PrisonMike from './prisonmike.png'
import styled from 'styled-components'

export default class ShuffleButton extends React.Component {

    render() {

        let StyledButton = styled.button`
            border: none;
        `
        let StyledDiv = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 700px;
        `

        return(<>
            <StyledDiv>
                <StyledButton onClick={() => this.props.shuffleEpisodes(this.props.allEps)}><img src={PrisonMike} alt="photo of prison mike"/></StyledButton>
            </StyledDiv>
        </>)
    }
}