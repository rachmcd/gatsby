import React from 'react'
import Header from '../Header'
import Nav from '../Nav'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
   

`

const Homepage = () => {
    return(
        <StyledDiv>
            <Nav />
            <Header/>
        </StyledDiv>
    )
}

export default Homepage