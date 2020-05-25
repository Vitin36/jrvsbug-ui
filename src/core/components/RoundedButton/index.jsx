import React from 'react'
import styled from 'styled-components'

const buttonSize = size => ({
    "big": 80,
    "extraBig": 120,
    "small": 40,
    "medium": 60,
}[size || "medium"])

const RoundedButtonStyled = styled.button`
    width: ${({ size }) => buttonSize(size)}px;
    height: ${({ size }) => buttonSize(size)}px;
    border-radius: 50%;
    border: 1px solid black;
    background: ${({ color }) => color ? color : 'white'};
    margin: 1.5em;

    & :hover{
        cursor: pointer;
        color: white;
        border-color: white;
    }
`

const RoundedButton = ({ text, color, size }) => {
    return (
        <RoundedButtonStyled color={color} size={size} >
            {text}
        </RoundedButtonStyled>
    )
}

export default RoundedButton
