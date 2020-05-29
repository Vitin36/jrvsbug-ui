import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components"
import actions from 'store/game/action'
import { existsGameRunning } from 'interactor/game'

import { Button, InputField } from "components"
import Header from "./Header"
import CardList from "./CardList"
import Footer from "./Footer"
import Finished from './Finished'

import { headerHeight } from "constants/sizes"

const Main = styled.main`
    padding-top: ${headerHeight * 2}px;
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
    & .d-row{
        display: flex;
        flex-direction: row;
    }
`

const Name = styled.input`
    min-width: 350px;
    height: 2em;
    padding: 0.5em;
    text-align: center;
    font-size: 1em;
`

const Game = () => {
    const { currentPlayer, started, ended, game } = useSelector(store => store.game)
    const { name } = currentPlayer
    const [player1, player2] = game.players
    const dispatch = useDispatch()
    const [gameId, setGameId] = useState(existsGameRunning())

    const handleNameChange = ({ target: { value } }) => dispatch(actions.setPlayerName(value))
    const handleReloadGame = () => dispatch(actions.findGame(gameId))
    const handleStartGame = () => name && name !== ''
        ? dispatch(actions.startGame(name))
        : window.alert(`You need to write your name`)

    window.addEventListener('storage', ({ key, newValue }) => {
        if (key === "gameId") {
            setGameId(newValue)
        }
    })

    return (
        <div>
            {!started && (
                <StartGame>
                    <InputField
                        label="Your Name"
                        placeholder="Write your name to Start a new Game"
                        value={name}
                        onChange={handleNameChange} />
                    <div className="d-row">
                        <Button
                            text="Start Game"
                            size="large"
                            onClick={handleStartGame} />
                        {gameId && (
                            <Button
                                text="Load Previous Game"
                                color="secondary"
                                size="large"
                                onClick={handleReloadGame} />
                        )}
                    </div>
                </StartGame>
            )}

            {started && (
                <>
                    <Header player1={player1} player2={player2} />
                    <Main>
                        <CardList />
                    </Main>
                    <Footer />
                </>
            )}

            {ended && (
                <Finished game={game} currentPlayer={currentPlayer} />
            )}
        </div>
    )
}

export default Game
