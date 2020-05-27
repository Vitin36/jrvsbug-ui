import React from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import actions from 'store/card/action'

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
    const dispatch = useDispatch()
    const handleSelect = card => {
        dispatch(actions.setSelectedCard(card))
    }
    return (
        <CardListStyled disabled={disabled}>
            {cards.map((card, key) => (
                <Card card={card} key={key} disabled={disabled} onClick={() => { handleSelect(card) }} />
            ))}
        </CardListStyled>
    )
}

export default CardList