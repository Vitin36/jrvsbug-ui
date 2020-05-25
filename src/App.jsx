import React, { useState } from "react"
import styled from "styled-components"

import { headerHeight } from "constants/utils"

import Header from "container/Header"
import CardList from "container/CardList"
import Footer from "container/Footer"
import Information from "components/Information"

import { card, cardList, player1, player2 } from "./mock"

const Application = styled.main`
    padding-top: ${headerHeight + (headerHeight / 2)}px;
`

const App = () => {
    const [boolean, setBoolean] = useState(false)

    return (
        <div className="App">
            <Header player1={player1} player2={player2} />
            <Application>
                <CardList cards={cardList} />
            </Application>
            <Footer selectedCard={card} disabled={boolean} />
            <Information visible={!boolean} message="Your Turn" color="white" />
            <button onClick={() => setBoolean(!boolean)}>Oi</button>
        </div>
    )
}

export default App