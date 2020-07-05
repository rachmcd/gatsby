import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    padding: 2% 2%;
    border-radius: 10px;

    div {
        margin: 2% 0;
        display: flex;
        justify-content: center;
    }
    h1 {
        font-size: 2rem;
    }

    .roles {
        width: 80%;
        text-transform: uppercase;
        display: flex;
        justify-content: space-between;

        p {
            font-size: 1rem;
            margin: 0 5%;
        }
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