export const types = {
    SET_SELECTED_CARD: 'SET_SELECTED_CARD'
}

export const actions = {
    setSelectedCard: selectedCard => ({ type: types.SET_SELECTED_CARD, selectedCard })
}

export default actions;