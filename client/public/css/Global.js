import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
`;

export const ParagraphContainerCenter = styled.div`
    text-align: center;
`;

export const FlexContentColumnDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    text-align: center;
    margin: 20px;
    box-sizing: border-box;
`;

import { load8 } from './KeyframeSpinner';

export const Loader = styled.div`
    border: 10px solid #f3f3f3;
    border-radius: 50%;
    border-top: 10px solid #3498db;
    display: inline-block; 
    float: left;
    width: 100px;
    height: 100px;
    -webkit-animation: ${load8} 2s linear infinite; /* Safari */
    animation: ${load8} 2s linear infinite;

`;