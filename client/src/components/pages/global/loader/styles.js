import styled from 'styled-components';
import { jump, flip, switchSide, fly, bubble, pulse } from './LoaderKeyFrames';
    

export const LoaderContainer = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: #ffde6b;

`;

export const Cooking = styled.div`
    position: fixed;
    margin: 0 auto;
    top: 50%;
    width: 75vh;
    height: 75vh;
    overflow: hidden;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Bubble1 = styled.div`
    position: absolute;
    border-radius: 100%;
    box-shadow: 0 0 .25vh #333;
`;

export const Bubble2 = styled.div`
    margin-top: 2.5vh;
    left: 58%;
    width: 2.5vh;
    height: 2.5vh;
    background-color: #333;
    animation: ${bubble} 2s cubic-bezier(.53, .16, .39, .96) infinite;
`;

export const Bubble3 = styled.div`
    margin-top: 3vh;
    left: 52%;
    width: 2vh;
    height: 2vh;
    background-color: #333;
    animation: ${bubble} 2s ease-in-out .35s infinite;
`;

export const Bubble4 = styled.div`
    margin-top: 2.7vh;
    left: 56%;
    width: 1.2vh;
    height: 1.2vh;
    background-color: #333;
    animation: ${bubble} 1.8s cubic-bezier(.53, .16, .39, .96) .9s infinite;
`;

export const Bubble5 = styled.div`
    margin-top: 2.7vh;
    left: 63%;
    width: 1.1vh;
    height: 1.1vh;
    background-color: #333;
    animation: ${bubble} 1.6s ease-in-out 1s infinite;
`;

export const Area = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 50%;
    background-color: transparent;
    transform-origin: 15% 60%;
    animation: ${flip} 2.1s ease-in-out infinite;
`;

export const Sides = styled.div`
    position: absolute;
    left: -45px;
    width: 100%;
    height: 100%;
    transform-origin: 15% 60%;
    animation: ${switchSide} 2.1s ease-in-out infinite;
`;

export const Handle = styled.div`
    position: absolute;
    bottom: 18%;
    right: 80%;
    width: 35%;
    height: 20%;
    background-color: transparent;
    border-top: 1vh solid #333;
    border-left: 1vh solid transparent;
    border-radius: 100%;
    transform: rotate(20deg) rotateX(0deg) scale(1.3, .9);
`;

export const Pan = styled.div`
    position: absolute;
    bottom: 20%;
    right: 30%;
    width: 50%;
    height: 8%;
    background-color: #333;
    border-radius: 0 0 1.4em 1.4em;
    transform-origin: -15% 0;
`;

export const Pancake = styled.div`
    position: absolute;
    left: -45px;
    top: 24%;
    width: 100%;
    height: 100%;
    transform: rotateX(85deg);
    animation: ${jump} 2.1s ease-in-out infinite;
`;

export const Pastry = styled.div`
    position: absolute;
    bottom: 26%;
    right: 37%;
    width: 40%;
    height: 45%;
    background-color: #333;
    box-shadow: 0 0 3px 0 #333;
    border-radius: 100%;
    transform-origin: -20% 0;
    animation: ${fly} 2.1s ease-in-out infinite;
`;