import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from 'store/game/action'

import ActionBar from "components/ActionBar";

const Footer = ({ disabled }) => {
    const { selectedCard, currentPlayer, game, canMakeMoviment } = useSelector(store => ({ ...store.card, ...store.game }))
    const dispatch = useDispatch()

    const onUse = () => {
        if(selectedCard && selectedCard.id){
            dispatch(actions.makeMoviment({
                cardId: selectedCard.id,
                gameId: game.id,
                playerId: currentPlayer.id,
                type: "APPLY_CARD",
            }))
        }
        else window.alert('You need to select a card')
    }

    const onPass = () => {
        dispatch(actions.makeMoviment({
            gameId: game.id,
            playerId: currentPlayer.id,
            type: "JUMP_ROUND",
        }))
    }

    return (
        <ActionBar
            onUse={onUse}
            onPass={onPass}
            selectedCard={selectedCard}
            disabled={!canMakeMoviment} />
    )
}

export default Footer
