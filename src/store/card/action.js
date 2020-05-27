export const types = {
    SET_SELECTED_CARD: 'SET_SELECTED_CARD',
    RESET_CARD: 'RESET_CARD'
}

export const actions = {
    setSelectedCard: selectedCard => ({ type: types.SET_SELECTED_CARD, selectedCard }),
    resetCard: () => ({ type: types.RESET_CARD })
}

export default actions;