import styled from 'styled-components';

export const ErrorContainer = styled.div`
    width: 100%;
    color: #332a40;
    border-radius: 8px;
    text-align: center;
    padding: 15px;
    margin-bottom: 15px;
    outline: none;
    box-sizing: border-box;
    font-size: 16px;

    p {
        margin-top: 0px;
    }
`;

export const ErrorMessage = styled.div`
    width: 100%;
`;

export const InputField = styled.input`

`;

import { slideUpAnimation } from './slideUpAnmiation';

export const Error = styled.div`
    padding-top: 29px;
    left: 0;
    position: fixed;
    width: 100%;
    height: 80px;
    text-align: center;
    background: #B33A3A;
    /* border: 1px solid black; */
    bottom: 0px;
    color: white;
    animation: ${slideUpAnimation} 1s forwards;
    animation-delay: 2s;
`;

export const Success = styled.div`
    padding-top: 29px;
    left: 0;
    position: fixed;
    width: 100%;
    height: 80px;
    text-align: center;
    background: #4BB543;
    /* border: 1px solid black; */
    bottom: 0px;
    color: white;
    animation: ${slideUpAnimation} 1s forwards;
    animation-delay: 2s;
`;

export const TextArea = styled.textarea`

`;