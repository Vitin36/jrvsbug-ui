import React from 'react'
import { useSelector } from 'react-redux'

import BigMessage from 'components/BigMessage'

function Information() {
    const { color, message, visible } = useSelector(store => store.information)

    return (
        <BigMessage color={color} message={message} visible={visible} />
    )
}

export default Information
