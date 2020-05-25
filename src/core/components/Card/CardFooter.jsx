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

const Info = ({ name, value }) => {
    return (
        <div>
            <p>{name} : {value}</p>
        </div>
    )
}

const CardFooter = ({ actions }) => {
    const { usedMana, recoveredMana, recoveredLife, manaDemage, lifeDemage } = actions
    return (
        <CardFooterStyled>
            <Info name="Mana cost" value={usedMana} />
            <Info name="Mana to Recover" value={recoveredMana} />
            <Info name="Life to Recover" value={recoveredLife} />
            <Info name="Mana Demage" value={manaDemage} />
            <Info name="Life Demage" value={lifeDemage} />
        </CardFooterStyled>
    )
}

export default CardFooter