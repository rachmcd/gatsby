import React from 'react'
import Header from '../Header'
import Nav from '../Nav'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    margin-top: 5%;
    div {
        width: 100%;
        
    }
    .nav {
        width: 25rem;
        margin: 0 2%;
    }



`

const Homepage = () => {
    return(
        <StyledDiv>
            <div className = "nav">
                <Nav />
            </div>
            <div className = "header">
                <Header />
            </div>
            
        </StyledDiv>
    )
}

export default Homepage