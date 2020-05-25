import React, { useState } from "react"
import styled from "styled-components"
import { Provider, useDispatch } from "react-redux"
import actions from 'store/information/action'

import { headerHeight } from "constants/utils"
import store from 'store'

import Header from "container/Header"
import CardList from "container/CardList"
import Footer from "container/Footer"
import Information from "container/Information"

import { card, cardList, player1, player2 } from "./mock"

const Application = styled.main`
    padding-top: ${headerHeight + (headerHeight / 2)}px;
`

const App = () => {
    const [boolean, setBoolean] = useState(false)

    return (
        <div className="App">
            <Provider store={store} >
                <Header player1={player1} player2={player2} />
                <Application>
                    <CardList cards={cardList} />
                </Application>
                <Footer selectedCard={card} disabled={boolean} />
                <Information visible={!boolean} message="Your Turn" color="white" />
                <Button onClick={() => setBoolean(!boolean)} />
            </Provider>
        </div>
    )
}

const Button = ({ onClick }) => {
    const dispatch = useDispatch()

    const click = () => {
        onClick()
        dispatch(actions.show('Your Turn'))
    }

    return (
        <button onClick={() => click()}>Oi</button>
    )
}

export default App