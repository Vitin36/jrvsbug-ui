import React from 'react'
import styled from 'styled-components'

const BigMessageStyled = styled.div`
    width: 100vw;
    background: rgba(0,0,0, 0.75);
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    transition:  150ms ease-in-out;
    overflow: hidden;
    height: ${({ visible }) => visible ? '35vh' : 0};
    opacity: ${({ visible }) => visible ? 1 : 0};
`

const MessageContent = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4em;
    letter-spacing: 0.75em;
    word-spacing: 1em;
    color: ${({ color }) => color || 'black'};
    font-weight: 700;
    text-align: center;
`

const BigMessage = ({ visible = false, color = 'white', message = '' }) => {
    return (
        <BigMessageStyled visible={visible}  >
            <MessageContent color={color} >
                {message}
            </MessageContent>
        </BigMessageStyled>
    )
}

export default BigMessage
