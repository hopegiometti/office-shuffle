import React from 'react'
import PrisonMike from './prisonmike.png'
import styled from 'styled-components'

export default class ShuffleButton extends React.Component {
    state={
        hover: false
    }

    onMouseOverHandler = () => {
        this.setState({
            hover: !this.state.hover
        }, () => {console.log(this.state)})
    }

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

        let StyledImage = styled.img`
            display: inline-block;
        `
        let StyledHOne = styled.h1`
            position: absolute;
            top: 50%;
            left: 50%;
        `

        return(<>
            <StyledDiv onMouseEnter={this.onMouseOverHandler} onMouseLeave={this.onMouseOverHandler}>
                {/* <StyledButton onClick={() => this.props.shuffleEpisodes(this.props.allEps)}><img src={PrisonMike} alt="photo of prison mike"/></StyledButton> */}
                {this.state.hover ? <StyledButton onClick={() => this.props.shuffleEpisodes(this.props.allEps)}><StyledImage src={PrisonMike} alt="photo of prison mike"/><StyledHOne>Click Here to Shuffle!</StyledHOne></StyledButton> : <StyledButton onClick={() => this.props.shuffleEpisodes(this.props.allEps)}><StyledImage src={PrisonMike} alt="photo of prison mike"/></StyledButton>}
            </StyledDiv>
        </>)
    }
}
// {this.state.hover ? <StyledButton onClick={() => this.props.shuffleEpisodes(this.props.allEps)}><img src={PrisonMike} alt="photo of prison mike"/>Click Here to Shuffle!</StyledButton> : <StyledButton onClick={() => this.props.shuffleEpisodes(this.props.allEps)}><img src={PrisonMike} alt="photo of prison mike"/></StyledButton>}