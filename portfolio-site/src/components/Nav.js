import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledDiv = styled.div`
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 12rem;
    margin: 4% 2%;

    .link {
        text-decoration: none;
    }

    div {
        display: flex;
        flex-direction: column;
        margin: 5% 0;
        // align-items: center; //TODO: FIX THIS?
    
        // .storyboard {
        //     font-size: 1rem;

        // }
        // .not-storyboard {
        //     font-size: 1.5rem;
        // }
        p {
            margin: 5% 5%;
            padding: 0 2%;
            // display: inline;
            
            &:hover {
            border-left: 2px solid #ec008c;
            border-right: 2px solid #ec008c;
            

            
        }
    }




`

const Nav = () => {
    return(
        <StyledDiv className = "light-div">
            <div>
                <Link className = "link" to = "/illustration">
                    <p className = "storyboard">Storyboards &amp; Illustration</p>
                </Link>
                <Link className = "link" to = "/resume">
                    <p className = "not-storyboard">Resume</p>
                </Link>
                <Link className = "link" to = "/reels">
                    <p className = "not-storyboard">Reels</p>
                </Link>
            </div>
        </StyledDiv>
    )
}

export default Nav