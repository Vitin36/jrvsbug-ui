import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import RoundedButton from 'components/RoundedButton'

const ActionBarStyled = styled.div`
    position: fixed;
    right: 0;
    background: grey;
    border-width: 2px 0 0 2px;
    border-color: black;
    border-style: solid;
    z-index: 9;
    min-height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.5em 1.5em;
    user-select: none;
    transition: all 250ms ease-in-out;
    bottom: ${({ disabled }) => disabled ? '-100vh' : '0'};
`

const SelectedCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 1em;

    & h1{
        font-size: 2em;
        max-width: 250px;
        text-align: center;
    }

    & h2{
        margin-bottom: 0.5em;
        font-size: 1.5em;
        text-decoration: underline;
        text-align: center;
    }
`

const ActionBar = ({ selectedCard = {}, disabled }) => {
    const { name } = selectedCard

    return (
        <ActionBarStyled disabled={disabled} >
            <SelectedCard>
                <h2>Selected Card</h2>
                <h1>{name || '-'}</h1>
            </SelectedCard>
            <RoundedButton text="Use Card" color="green" size="big" />
            <RoundedButton text="Pass Round" color="blue" size="big" />
        </ActionBarStyled>
    )
}

export default ActionBar