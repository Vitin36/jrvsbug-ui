import React from "react"
import styled from "styled-components"

const CardBodyStyled = styled.div`
    & p {
        text-align: center;
        user-select: none;
    }
    padding: 0 1em;
    margin: auto 0;
    max-width: 100%;
`

const CardBody = ({ description = '' }) => {
    return (
        <CardBodyStyled>
            <p>{description}</p>
        </CardBodyStyled>
    )
}

export default CardBody