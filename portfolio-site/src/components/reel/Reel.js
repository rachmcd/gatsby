import React from 'react'
import styled from 'styled-components'
import Nav from '../Nav.js'
import Header from '../Header.js'
import {useRouteMatch} from 'react-router-dom'

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
const Reel = () => {

    const route = useRouteMatch();

    return(
        <>
         <StyledDiv>
            <div className = "nav">
                <Nav route = {route.path}/>
            </div>
            <div className = "header">
                <Header />
                <h1>Coming soon!</h1>
            </div>
            
        </StyledDiv>
            
        </>
    )
}

export default Reel