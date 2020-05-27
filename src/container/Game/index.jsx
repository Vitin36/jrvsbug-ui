import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components"
import actions from 'store/game/action'

import RoundedButton from "components/RoundedButton"
import Header from "./Header"
import CardList from "./CardList"
import Footer from "./Footer"
import Finished from './Finished'

import { headerHeight } from "constants/utils"

const Main = styled.main`
    padding-top: ${headerHeight + (headerHeight / 2)}px;
`

const StartGame = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Name = styled.input`
    min-width: 350px;
    height: 2em;
    padding: 0.5em;
    text-align: center;
    font-size: 1em;
`

const Game = () => {
    const { currentPlayer, canMakeMoviment, started, ended, game } = useSelector(store => store.game)
    const { name, deck } = currentPlayer
    const [player1, player2] = game.players
    const dispatch = useDispatch()

    const handleNameChange = ({ target: { value } }) => dispatch(actions.setPlayerName(value))
    const handleStartGame = () => name && name !== ''
        ? dispatch(actions.startGame(name))
        : window.alert(`You need to write your name`)

    return (
        <div>
            {!started && (
                <StartGame>
                    <Name
                        placeholder="Write your name to Start"
                        value={name}
                        onChange={handleNameChange} />
                    <RoundedButton
                        fontSize="1.15em"
                        text="Start Game"
                        color="purple"
                        size="extraBig"
                        onClick={handleStartGame} />
                </StartGame>
            )}

            {started && (
                <div>
                    <Header player1={player1} player2={player2} />
                    <Main>
                        <CardList cards={deck} disabled={!canMakeMoviment} />
                    </Main>
                    <Footer />
                </div>
            )}

            {ended && (
                <Finished game={game} currentPlayer={currentPlayer} />
            )}
        </div>
    )
}

export default Game
