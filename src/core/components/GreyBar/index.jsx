import styled from "styled-components"

const StyledGreyBar = styled.div`
    background: grey;
    height: 40px;
    width: 250px;
    overflow: hidden;
    position: relative;
    display: block;
    border: 1px solid black;
    & > p {
        display: block;
        color: black;
        text-align: center;
        margin: 0;
        background-color: transparent;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media screen and (max-width: 1200px) {
        width: 150px;
    }
`

export default StyledGreyBar