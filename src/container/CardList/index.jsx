import React from "react"
import styled from "styled-components"

import Card from "components/Card"

const CardListStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    min-height: 100%;
`

const CardList = ({ cards = [], disabled }) => {
    const [card1] = cards
    return (
        <CardListStyled disabled={disabled}>
        <Card card={card1} key="oi" selected />
        <Card card={card1} key="oi2" disabled />
            {cards.map((card, key) => (
                <Card card={card} key={key} disabled={disabled} />
            ))}
        </CardListStyled>
    )
}

export default CardList