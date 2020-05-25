import React from "react"
import styled from "styled-components"

import Life from "components/Life"
import Mana from "components/Mana"

const PlayerStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-between;

`

const PlayerName = styled.p`
    font-size: 2.5em;
    margin: 0 1em;
    ${({ left }) => left ? 'margin-right: 0.5em ' : null}
    ${({ right }) => right ? 'margin-left: 0.5em ' : null}
`

const PlayerRight = ({ name, life, mana }) => {
    return (
        <PlayerStyled>
            <PlayerName right >
                {name}
            </PlayerName>
            <div>
                <Life count={life} />
                <Mana count={mana} />
            </div>
        </PlayerStyled>
    )
}

const PlayerLeft = ({ name, life, mana }) => {
    return (
        <PlayerStyled>
            <div>
                <Life count={life} />
                <Mana count={mana} />
            </div>
            <PlayerName left >
                {name}
            </PlayerName>
        </PlayerStyled>
    )
}

const Player = ({ player, left, right }) => {
    const { name, life, mana } = player
    return (
        <div>
            {left && (
                <PlayerLeft
                    name={name}
                    life={life}
                    mana={mana}
                />
            )}
            {right && (
                <PlayerRight
                    name={name}
                    life={life}
                    mana={mana}
                />
            )}
        </div>
    )
}

export default Player