import React from 'react'
import Header from '../Header'
import Nav from '../Nav'
import styled from 'styled-components'

import PDFView from './PDFView.js'


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
    .header {
        display: flex;
        flex-direction: column;
        

        
    }

    .resumepdf {
        margin: 5% 0;
        max-width: 35rem;
        overflow: scroll;
        
        height: 30rem;
        
    }
    .pdf-container {
        max-width: 30rem;
        padding: 1%;
        scrollbar-color: #89ccc2 #36a897;
        


    }

    .download {
        width: 30rem;
        align-self: left;
        text-transform: uppercase;
        font-size: 1.2rem;
        text-align: right;
        margin-bottom: 5%;
        
    }


`

// TODO: fix scrollbar color
const Resume = () => {
    return(
        <>
            <StyledDiv>
            <div className = "nav">
                <Nav />
            </div>
            <div className = "header">
                <Header />
                <div className = "resumepdf">
                    <div className = "pdf-container dark-div">
                        <PDFView/>
                    </div>
                </div>
                <p className = "download">Download</p>
            </div>
            
        </StyledDiv>
        </>
    )
}

export default Resume