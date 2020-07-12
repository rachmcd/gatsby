import React from 'react'
import { Document, Page, pdfjs} from 'react-pdf'
import pdfResume from './resume.pdf'
import styled from 'styled-components'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const StyledDiv = styled.div`
    // max-width: 30rem;

    .document {
        max-width: 100%;
        
    }
    

`
const PDFView = () => {
    return(
        <StyledDiv>
            
            <Document file={pdfResume} className="document">
                <Page pageNumber = {1} />
            </Document>
        </StyledDiv>
    )
}

export default PDFView