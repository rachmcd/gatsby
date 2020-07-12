// CHANGE
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledDiv = styled.div`
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 12rem;
    // margin: 4% 2%;

    .link {
        text-decoration: none;
    }

    div {
        display: flex;
        flex-direction: column;
        margin: 5% 0;
        
        p {
            margin: 5% 5%;
            padding: 0 2%;
            // display: inline;
            
            &:hover {
            border-left: 2px solid #ec008c;
            border-right: 2px solid #ec008c;
            }
            
            
        }

        .focus {
            border-left: 2px solid #ec008c;
            border-right: 2px solid #ec008c; 
        }
    }




`
// TODO: hover and focus should be different
const Nav = props => {
    let route = ""
    if (props.route) {
        route = props.route
    }
    
    console.log(route)
    return(
        <StyledDiv className = "light-div">
            <div>
                <Link className = "link" to = "/illustration">
                    <p className = {route == "/illustration" ? "storyboard focus" : "storyboard"}>Storyboards &amp; Illustration</p>
                </Link>
                <Link className = "link" to = "/resume">
                    <p className = {route == "/resume" ? "focus not-storyboard" : "not-storyboard"}>Resume</p>
                </Link>
                <Link className = "link" to = "/reel">
                    <p className = {route == "/reel"? "focus not-storyboard" : "not-storyboard"}>Reels</p>
                </Link>
            </div>
        </StyledDiv>
    )
}

export default Nav