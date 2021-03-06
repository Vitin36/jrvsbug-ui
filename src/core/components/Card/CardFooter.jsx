import React from "react"
import styled from "styled-components"

const CardFooterStyled = styled.div`
    border: 2px solid black; 
    padding: 0.5em 1em;
    margin: auto 0 0.5em 0;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    justify-self: flex-end;
    user-select: none;
    
    & p {
        margin: 0;
    }
`

const Info = ({ name = '', value = '' }) => {
    return (
        <div>
            <p>{name} : {value}</p>
        </div>
    )
}

const CardFooter = ({ manaCost, manaDamage, manaRecover, lifeDamage }) => {
    return (
        <CardFooterStyled>
            <Info name="Mana cost" value={manaCost} />
            <Info name="Mana to Recover" value={manaRecover} />
            <Info name="Mana Demage" value={manaDamage} />
            <Info name="Life Demage" value={lifeDamage} />
        </CardFooterStyled>
    )
}

export default CardFooter