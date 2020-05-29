import React from "react"

import { HeaderStyled, HeaderLeftPosition, HeaderRightPosition, Square, Player } from "components"

const Header = ({ player1, player2 }) => {
    return (
        <HeaderStyled>
            <HeaderLeftPosition>
                <Player player={player1} right />
            </HeaderLeftPosition>
            <Square text="VS" />
            <HeaderRightPosition>
                <Player player={player2} left />
            </HeaderRightPosition>
        </HeaderStyled>
    )
}

export default Header