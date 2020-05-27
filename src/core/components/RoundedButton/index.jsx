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
    font-size: ${({ fontSize }) => fontSize ? fontSize : '1em'};
    margin: 1.5em;
    outline: none;

    & :hover{
        cursor: pointer;
        color: white;
        border-color: white;
    }
`

const RoundedButton = ({ onClick = () => { }, text, fontSize, color = 'white', size = 'medium' }) => {
    return (
        <RoundedButtonStyled
            color={color}
            size={size}
            fontSize={fontSize}
            onClick={onClick}
        >
            {text}
        </RoundedButtonStyled>
    )
}

export default RoundedButton
