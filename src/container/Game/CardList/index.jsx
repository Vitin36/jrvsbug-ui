import React from "react"
import { useDispatch, useSelector } from 'react-redux'
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

const CardList = () => {
    const { currentPlayer, canMakeMoviment } = useSelector(store => store.game)
    const { deck } = currentPlayer

    const dispatch = useDispatch()
    const handleSelect = card => {
        dispatch(actions.setSelectedCard(card))
    }
    return (
        <CardListStyled>
            {deck.map((card, key) => {
                const disabled = !canMakeMoviment || card.manaCost > currentPlayer.mana
                return (
                    <Card
                        card={card}
                        key={key}
                        disabled={disabled}
                        onClick={() => {
                            !canMakeMoviment ?
                                window.alert('You cant use any card now')
                                : card.manaCost > currentPlayer.mana ?
                                    window.alert('You dont have enougth mana to this card')
                                    : handleSelect(card)
                        }} />
                )
            })}
        </CardListStyled>
    )
}

export default CardList