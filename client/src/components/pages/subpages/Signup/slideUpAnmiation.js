import styled, { keyframes } from 'styled-components';
 
export const slideUpAnimation = keyframes`
    from {
        opacity: 1
        z-index: 1;
        bottom: 0px;
    } 
    to {
        z-index: 0;
        opacity: 0;
        bottom: -80px;
    }

`;