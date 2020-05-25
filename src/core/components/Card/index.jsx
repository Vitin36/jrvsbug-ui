import React from "react"
import styled from 'styled-components'

import CardHeader from "./CardHeader"
import CardBody from "./CardBody"
import CardFooter from "./CardFooter"

const CardStyled = styled.div`
    margin: 1.5em 1em;
    background: purple;
    border: 3px solid black;
    width: 250px;
    height: 350px;
    display: flex;
    flex-direction: column;
    padding: 1em 0.5em 0.25em 0.5em;
    opacity: ${ ({ disabled }) => disabled ? 0.5 : 1};
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    ${({ selected }) => selected ? 'margin-top: -35px;' : null}
    ${({ selected }) => selected ? 'border: 6px solid black;' : null}

    & :hover{
        opacity: ${({ selected, disabled }) => disabled ? 0.5 : selected ? 1 : 0.75};
        ${({ disabled }) => disabled ? null : 'margin-top: -35px'};
    }
`

const Card = ({ card, disabled, selected }) => {
    const { name, description, actions } = card
    return (
        <CardStyled disabled={disabled} selected={selected} >
            <CardHeader name={name} />
            <CardBody description={description} />
            <CardFooter actions={actions} />
        </CardStyled>
    )
}

export default Card