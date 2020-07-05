import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2% 5%;
    border-radius: 10px;

    div {
        margin: 2% 0;
    }
    h1 {
        font-size: 2rem;
    }

    .roles {
        text-transform: uppercase;
        display: flex;
        justify-content: space-around;
    }




`

const Header = () => {
    return(
        <StyledDiv className = "light-div">
            <div>
                <h1>Rachael McDonald</h1>
            </div>
            <div className = "roles">
                <p>Production</p>
                <p>Development</p>
                <p>Animation</p>
            </div>
            <div>
                <p>reachme@rachmcd.com</p>
            </div>
            
        </StyledDiv>
        
    )
}

export default Header