import React from "react"
import styled from "styled-components"

const CardHeaderStyled = styled.div`
    max-width: 100%;
    text-align: center;
    margin-bottom: 0.75em;
    border: 2px solid black; 
    padding: 1em 0;
    user-select: none;
`

const CardHeader = ({ name }) => {
    return (
        <CardHeaderStyled>
            <span>{name}</span>
        </CardHeaderStyled>
    )
}

export default CardHeader