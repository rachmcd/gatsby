import React from 'react'
import Header from '../Header'
import Nav from '../Nav'
import styled from 'styled-components'
import DownloadLink from 'react-download-link'
import PDFView from './PDFView.js'
import resume from './resume.pdf'


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
        margin-top: 5%;
        margin-bottom: 2.5%;
        max-width: 35rem;
        overflow: scroll;
        
        height: 30rem;
        
    }
    .pdf-container {
        max-width: 30rem;
        padding: 1%;
        scrollbar-color: #89ccc2 #36a897;
        


    }
    // had to use !important here, not happy about it
    .download {
        width: 30rem;
        align-self: left;
        text-transform: uppercase;
        font-size: 1.2rem;
        text-align: right;
        margin-bottom: 2.5% !important;
        text-decoration: none !important;
        color: #ec008c !important;
        
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
                {/* <DownloadLink className = "download" label = "Download" filename = "resume.pdf" exportFile = {() => {return resume}} /> */}
                <a href="./assets/resume.pdf" className = "download" target = "_blank">Download</a>
                    
               
                
            </div>
            
        </StyledDiv>
        </>
    )
}

export default Resume