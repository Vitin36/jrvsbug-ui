import React from "react"
import styled from "styled-components"

import GreyBar from "components/GreyBar"
import { calcBarSize } from "constants/utils"

const GreenBar = styled.div`
    width: ${ ({ count }) => count || count >= 0 ? calcBarSize(count) : `100`}%;
    height: 40px;
    background: green;
    display: block;
    position: relative;
`

const Life = ({ count = 0 }) => {
    return (
        <GreyBar>
            <GreenBar count={count} />
            <p>{count} LP</p>
        </GreyBar>
    )
}

export default Life