import React from 'react'

import ActionBar from "components/ActionBar";

const Footer = ({ selectedCard, disabled }) => {
    return (
        <ActionBar selectedCard={selectedCard} disabled={disabled} />
    )
}

export default Footer
