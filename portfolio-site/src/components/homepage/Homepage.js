import React from 'react'
import Header from '../Header'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;

`

const Homepage = () => {
    return(
        <StyledDiv>
            
            <Header/>
        </StyledDiv>
    )
}

export default Homepage