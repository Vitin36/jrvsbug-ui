import React from "react"
import styled from "styled-components"

import { headerHeight } from "constants/sizes"

export const HeaderStyled = styled.header`
    display: flex;
    width: 100%;
    height: ${headerHeight}px;
    background: grey;
    border-bottom: 2px solid black;
    position: fixed;
    z-index: 9;
`

export const HeaderLeftPosition = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
`

export const HeaderRightPosition = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
`

export const SquareVS = styled.div`
    display: block;
    position: absolute;
    bottom: -50%;
    right: 50%;
    transform: translateX(50%);
`

export const SquareBlock = styled.div`
    display: block;
    transform: rotate(45deg);
    background: grey;
    width: ${headerHeight}px;
    height: ${headerHeight}px;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
`

export const SquareText = styled.div`
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
    font-size: 3em;
`

export const Square = ({ text = 'VS' }) => {
    return (
        <SquareVS>
            <SquareBlock />
            <SquareText>{text}</SquareText>
        </SquareVS>
    )
}