import React from 'react';
import { renderRoutes } from "react-router-config";
import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';
import {Switch} from "react-router-dom";


const PageWrap = styled.div`
    width: 100%;
    position: absolute;
    top: 0px; left: 0px; right: 0px; bottom: 0px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;

    * {
      box-sizing: border-box;
    }
`;

/* Vi bør loade lodash metoden map alene - for at spare plads i bundle. */
const App = ({route}) => {
    return (
       
        <PageWrap>
              <Switch>
                  {renderRoutes(route.routes)}
              </Switch>
        </PageWrap>
  
    );
};

export default {
    component: App
}

