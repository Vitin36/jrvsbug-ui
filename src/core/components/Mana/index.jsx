import React from "react"
import styled from "styled-components"

import GreyBar from "components/GreyBar"
import { calcBarSize } from "constants/utils"


const BlueBar = styled.div`
    width: ${ ({ count }) => count || count >= 0 ? calcBarSize(count) : `100`}%;
    height: 40px;
    background: blue;
`

const Mana = ({ count }) => {
    return (
        <GreyBar>
            <BlueBar count={count} />
            <p>{count} MP</p>
        </GreyBar>
    )
}

export default Mana