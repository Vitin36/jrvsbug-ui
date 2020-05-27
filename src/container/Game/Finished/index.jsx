import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import actions from 'store/game/action'
import { getWinner } from 'interactor/game'

import RoundedButton from 'components/RoundedButton'

const Background = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.85);
    z-index: 99;
`

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & h1{
        font-size: 5em;
        font-weight: 700;
        text-align: center;
        color: ${({ color }) => color ? color : 'white'};
    }
`

function Finished({ game = {}, currentPlayer = {} }) {
    const success = currentPlayer.id == getWinner(game).id
    const color = success ? 'green' : 'red'
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(actions.resetGame())
    }

    return (
        <Background>
            <Container color={color}>
                {success && (
                    <h1>Congratulations, You win !!</h1>
                )}
                {!success && (
                    <h1>Sorry, You lose !!</h1>
                )}
                <RoundedButton
                    text="Play Again"
                    size="extraBig"
                    color={color}
                    onClick={handleClick}
                />
            </Container>
        </Background>
    )
}

export default Finished
