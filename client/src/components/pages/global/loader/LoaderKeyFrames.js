import styled, { keyframes } from 'styled-components';
 
export const jump = keyframes`
    0% {
        top: 24%;
        transform: rotateX(85deg);
    }
    25% {
        top: 10%;
        transform: rotateX(0deg);
    }
    50% {
        top: 30%;
        transform: rotateX(85deg);
    }
    75% {
        transform: rotateX(0deg);
    }
    100% {
        transform: rotateX(85deg);
    }
`;

export const flip = keyframes`
    0% {
        transform: rotate(0deg);
    }
    5% {
        transform: rotate(27deg);
    }
    30%,
    50% {
        transform: rotate(0deg);
    }
    55% {
        transform: rotate(27deg);
    }
    83.3% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(0deg);
    }
`;

export const switchSide = keyframes`
    0% {
        transform: rotateY(0deg);
    }
    50% {
        transform: rotateY(180deg);
    }
    100% {
        transform: rotateY(0deg);
    }
`;

export const fly = keyframes`
    0% {
        bottom: 26%;
        transform: rotate(0deg);
    }
    10% {
        bottom: 40%;
    }
    50% {
        bottom: 26%;
        transform: rotate(-190deg);
    }
    80% {
        bottom: 40%;
    }
    100% {
        bottom: 26%;
        transform: rotate(0deg);
    }
`;

export const bubble = keyframes`
    0% {
        transform: scale(.15, .15);
        top: 80%;
        opacity: 0;
    }
    50% {
        transform: scale(1.1, 1.1);
        opacity: 1;
    }
    100% {
        transform: scale(.33, .33);
        top: 60%;
        opacity: 0;
    }
`;

export const pulse = keyframes`
    0% {
        transform: scale(1, 1);
        opacity: .25;
    }
    50% {
        transform: scale(1.2, 1);
        opacity: 1;
    }
    100% {
        transform: scale(1, 1);
        opacity: .25;
    }
`;