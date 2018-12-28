
import React from 'react';

import {
    LoaderContainer,
    Cooking,
    Bubble1,
    Bubble2,
    Bubble3,
    Bubble4,
    Bubble5,
    Area,
    Sides,
    Pan,
    Handle,
    Pancake,
    Pastry
} from './styles';

const Loader = () => {
    return ( 
     
        <Cooking>
            {/* <Bubble1 />
            <Bubble2 />
            <Bubble3 />
            <Bubble4 />
            <Bubble5 /> */}
            <Area>
                <Sides>
                    <Pan />
                    <Handle />
                </Sides>
                <Pancake>
                    <Pastry />
                </Pancake>
            </Area>
        </Cooking>
 
       
     );
}
 
export default Loader;